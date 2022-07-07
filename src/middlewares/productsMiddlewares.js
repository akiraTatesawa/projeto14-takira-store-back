import chalk from "chalk";

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
