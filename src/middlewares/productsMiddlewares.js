import chalk from "chalk";
import { ObjectId } from "mongodb";

import { db } from "../database/db.js";

export async function validateCategory(req, res, next) {
  const { icon } = req.params;

  try {
    const category = await db.collection("categories").findOne({ icon });
    if (!category) {
      console.log(chalk.red("\nInvalid category"));
      return res.sendStatus(404);
    }

    res.locals.category = category;
    next();
  } catch (error) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function validateProduct(req, res, next) {
  const { productId } = req.params;

  if (!productId) {
    console.log(chalk.red("Must send a productId"));
    return res.sendStatus(422);
  }

  try {
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(productId) });

    if (!product) {
      console.log(chalk.red("\nInvalid product"));
      return res.sendStatus(404);
    }

    res.locals.product = product;
    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
