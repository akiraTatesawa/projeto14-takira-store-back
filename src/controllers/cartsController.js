import { ObjectId } from "mongodb";

import { db } from "../database/db.js";

export async function getCartItems(_req, res) {
  const { userId } = res.locals.session;

  try {
    const userCart = await db.collection("carts").findOne({ userId });
    const products = await db
      .collection("products")
      .find({
        _id: {
          $in: userCart.products.map(
            ({ productId }) => new ObjectId(productId)
          ),
        },
      })
      .toArray();
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
      (item) => item.productId.toString() !== productId.toString()
    );
    await db
      .collection("carts")
      .updateOne({ userId }, { $set: { products: updatedCart } });
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function addProductToCart(req, res) {
  const { session } = res.locals;
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

    const updatedCart = await db.collection("carts").findOne({ userId });

    return res.status(200).send(updatedCart);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
