import chalk from "chalk";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { ObjectId } from "mongodb";

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

export async function postSignIn(_req, res) {
  const { registeredUser } = res.locals;

  try {
    const token = uuid();
    const userId = new ObjectId(registeredUser._id);

    const session = await db.collection("sessions").findOne({ userId });

    if (session) {
      const updatedSession = {
        $set: {
          token,
          timestamp: Date.now(),
        },
      };
      await db.collection("sessions").updateOne({ userId }, updatedSession);
    } else {
      const newSession = { userId, token, timestamp: Date.now() };
      await db.collection("sessions").insertOne(newSession);
    }

    const responseData = {
      name: registeredUser.name,
      token,
    };

    return res.status(200).send(responseData);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function deleteSession(_req, res) {
  const { session } = res.locals;

  try {
    await db.collection("sessions").deleteOne({ userId: session.userId });

    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
