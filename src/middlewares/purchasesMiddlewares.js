import { db } from "../database/db.js";

export async function verifyUserPurchases(req, res, next) {
  const { session } = res.locals;

  try {
    const userPurchases = await db
      .collection("purchases")
      .find({ userId: session.userId })
      .toArray();

    if (userPurchases.length === 0) {
      console.log("Purchases not found");
      return res.sendStatus(404);
    }

    const purchasesInfo = userPurchases.map(
      ({ total, productsInfo, date }) => ({
        total,
        productsInfo,
        date,
      })
    );

    res.locals.purchases = purchasesInfo;
    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
