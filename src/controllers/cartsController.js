import { ObjectId } from "mongodb";
import dayjs from "dayjs";
import { db } from "../database/db.js";
import { calcCartTotal } from "../utils/calcCartTotal.js";

export async function getCartItems(_req, res) {
  console.log("cheguei aqui");
  const { userId } = res.locals.session;

  try {
    const userCart = await db.collection("carts").findOne({ userId });
    const products = userCart
      ? await db
          .collection("products")
          .find({
            _id: {
              $in: userCart.products.map(
                ({ productId }) => new ObjectId(productId)
              ),
            },
          })
          .toArray()
      : [];
    const responseData = products.map((product) => ({
      ...product,
      quantity: userCart.products.find(
        ({ productId }) => productId.toString() === product._id.toString()
      ).quantity,
    }));
    return res.status(200).send(responseData.reverse());
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function deleteCartItem(req, res) {
  const { userId } = res.locals.session;
  const { productId } = req.params;

  try {
    const userCart = await db.collection("carts").findOne({ userId });
    const updatedCart = userCart.products.filter(
      (item) => item.productId.toString() !== productId
    );
    await db
      .collection("carts")
      .updateOne({ userId }, { $set: { products: updatedCart } });

    const deletedQuantity = userCart.products.find(
      ({ productId: id }) => id.toString() === productId
    ).quantity;

    await db
      .collection("products")
      .updateOne(
        { _id: new ObjectId(productId) },
        { $inc: { numberOfCarts: -deletedQuantity } }
      );

    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function addProductToCart(req, res) {
  const { session, productLocal } = res.locals;
  const { userId } = session;

  try {
    const cart = await db.collection("carts").findOne({ userId });
    const filter = { userId };

    if (cart.products.some((el) => el.productId === req.body.productId)) {
      const updatedCartProducts = cart.products.map((product) => {
        if (product.productId === req.body.productId) {
          const newQuantity = product.quantity + 1;
          return { ...product, quantity: newQuantity };
        }
        return product;
      });

      const setOperation = { $set: { products: updatedCartProducts } };

      await db.collection("carts").updateOne(filter, setOperation);
    } else {
      const pushOperation = { $push: { products: req.body } };

      await db.collection("carts").updateOne(filter, pushOperation);
    }

    await db
      .collection("products")
      .updateOne(
        { _id: productLocal._id },
        { $set: { numberOfCarts: productLocal.numberOfCarts + 1 } }
      );

    const updatedCart = await db.collection("carts").findOne({ userId });

    return res.status(200).send(updatedCart);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function getUserCartData(_req, res) {
  const { cart } = res.locals;

  try {
    const total = await calcCartTotal(cart, res);

    const resData = { total, cartId: cart._id };

    return res.status(200).send(resData);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function finishOrder(_req, res) {
  const { cart } = res.locals;

  const query = cart.products.map((product) => ({
    id: new ObjectId(product.productId),
    qt: product.quantity,
  }));

  try {
    // transfer qt from numberOfCartsToPurchased
    query.forEach(async ({ id, qt }) => {
      const product = await db
        .collection("products")
        .findOne({ _id: new ObjectId(id) });

      await db.collection("products").updateOne(
        { _id: product._id },
        {
          $set: {
            numberOfCarts: product.numberOfCarts - qt,
            numberOfPurchases: product.numberOfPurchases + qt,
          },
        }
      );
    });

    const total = await calcCartTotal(cart, res);

    // register the purchase
    await db.collection("purchases").insertOne({
      ...cart,
      total,
      date: dayjs().format("DD/MM/YYYY"),
      timestamp: Date.now(),
    });
    // delete cart after checkout
    await db.collection("carts").deleteOne({ _id: cart._id });

    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
