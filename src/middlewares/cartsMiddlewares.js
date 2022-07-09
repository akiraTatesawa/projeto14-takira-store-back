import chalk from "chalk";
import { ObjectId } from "mongodb";

import { db } from "../database/db.js";
import { cartSchema } from "../schemas/cartSchema.js";

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

export async function validateItem(req, res, next) {
  const { productId, quantity } = req.body;

  const { error } = cartSchema.validate({ productId, quantity });
  if (error) {
    console.log(chalk.red(error.details[0].message));
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

    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function createCart(_req, res, next) {
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

export async function verifyCart(_req, res, next) {
  const { session } = res.locals;
  const { userId } = session;

  try {
    const cart = await db.collection("carts").findOne({ userId });

    if (!cart) {
      console.log(chalk.red("\nCart not found"));
      return res.sendStatus(404);
    }

    res.locals.cart = cart;
    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
