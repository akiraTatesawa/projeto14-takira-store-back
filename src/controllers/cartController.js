import { db } from "../database/db";

export function getCartItems(_req, res) {
  const { userId } = res.locals.session;

  try {
    const userCart = await db.collection("carts").findOne({ userId });
    const products = await db.collection("products").find({ _id: { $in: userCart.products.map(({ productId }) => productId ) } });
    const responseData = products.map(product => ({
      ...product,
      quantity: userCart.products.find(({ productId }) => productId.toString() === product._id.toString()).quantity,
    }));
    return res.status(200).send(responseData);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export function deleteCartItem(req, res) {
  const { userId } = res.locals.session;
  const { productId } = req.params;

  try {
    const userCart = await db.collection("carts").findOne({ userId });
    const updatedCart = userCart.products.filter(item => item.productId.toString() !== productId.toString());
    await db.collection("carts").updateOne(
      { userId },
      { $set: { products: updatedCart } }
    );
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
