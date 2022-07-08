import chalk from "chalk";
import { ObjectId } from "mongodb";

import { db } from "../database/db.js";

export async function validateCategory(req, res, next) {
  const { categoryId } = req.params;

  if (!categoryId) {
    console.log(chalk.red("Error: categoryId is required"));
    return res.status(400).send("Missing categoryId parameter");
  }

  try {
    const category = await db
      .collection("categories")
      .findOne({ _id: new ObjectId(categoryId) });
      
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
