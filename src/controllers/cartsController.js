import { db } from "../database/db.js";

export async function addProductToCart(_req, res) {
  const { session } = res.locals;
  const { userId } = session;

  try {
    const cart = await db.collection("carts").findOne({ userId });
    return res.status(200).send(cart);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
