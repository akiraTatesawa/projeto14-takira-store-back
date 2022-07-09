import { db } from "../database/db.js";

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
