import chalk from "chalk";

import { db } from "../database/db.js";

export async function verifyUserPurchases(req, res, next) {
  const { session } = res.locals;

  try {
    const userPurchases = await db
      .collection("purchases")
      .find({ userId: session.userId })
      .toArray();

    if (userPurchases.length === 0) {
      console.log(chalk.red("Purchases not found"));
      // use this status on front
      return res.sendStatus(404);
    }

    res.locals.purchases = userPurchases;
    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
