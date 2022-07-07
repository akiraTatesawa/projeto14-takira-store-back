import chalk from "chalk";
import bcrypt from "bcrypt";

import { db } from "../database/db.js";

export async function registerUser(_req, res) {
  const { newUser } = res.locals;

  try {
    await db.collection("accounts").insertOne({
      ...newUser,
      password: bcrypt.hashSync(newUser.password, 10),
      favorites: [],
    });

    console.log(
      chalk.green(
        `\nUser ${chalk.green.bold(newUser.name)} registered successfully`
      )
    );
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

  return res.sendStatus(201);
}
