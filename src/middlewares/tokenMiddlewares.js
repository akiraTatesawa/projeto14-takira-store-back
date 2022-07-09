import chalk from "chalk";

import { db } from "../database/db.js";

export async function validateToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    console.log(chalk.red("\nNo token provided"));
    return res.sendStatus(422);
  }

  try {
    const session = await db.collection("sessions").findOne({ token });
    if (!session) {
      console.log(chalk.red("\nInvalid token"));
      return res.sendStatus(401);
    }

    res.locals.session = session;
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
