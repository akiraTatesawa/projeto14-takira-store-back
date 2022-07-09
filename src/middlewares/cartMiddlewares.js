import { ObjectId } from "mongodb";

import { db } from "../database/db";
import { cartSchema } from "../schemas/cartSchema";

export function validateProductId(req, res, next) {
  const { productId } = req.params;

  if (!productId) {
    console.log(chalk.red("Must send a productId"));
    return res.sendStatus(422);
  }

  try {
    const product = db
      .collection("products")
      .findOne({ _id: new ObjectId(productId) });

    if (!product) {
      console.log(chalk.red("\nInvalid product"));
      return res.sendStatus(404);
    }

    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export function validateItem(req, res, next) {
  const { productId, quantity } = req.body;

  const { error } = cartSchema.validate({ productId, quantity });
  if (error) {
    console.log(chalk.red(error.details[0].message));
    return res.sendStatus(422);
  }

  try {
    const product = db
      .collection("products")
      .findOne({ _id: new ObjectId(productId) });

    if (!product) {
      console.log(chalk.red("\nInvalid product"));
      return res.sendStatus(404);
    }

    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
