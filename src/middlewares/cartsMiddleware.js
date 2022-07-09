import { db } from "../database/db.js";

export async function verifyCart(_req, res, next) {
  // create a cart if not exists
  const { session } = res.locals;
  const { userId } = session;

  try {
    const cart = await db.collection("carts").findOne({ userId });

    if (!cart) {
      const cartTemplate = {
        userId,
        timestamp: Date.now(),
        products: [],
      };

      await db.collection("carts").insertOne(cartTemplate);
    }

    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
