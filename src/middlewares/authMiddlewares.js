// eslint-disable-next-line import/no-unresolved
import { stripHtml } from "string-strip-html";
import { compareSync } from "bcrypt";
import chalk from "chalk";

import {
  userRegistrationSchema,
  userSignInSchema,
} from "../schemas/authSchema.js";

import { db } from "../database/db.js";

export async function validateUserRegistration(req, res, next) {
  const { error } = userRegistrationSchema.validate(req.body);

  if (error) {
    console.log(error.details);
    return res.sendStatus(422);
  }

  if (stripHtml(req.body.name).result.trim().length === 0) {
    console.log(chalk.red("\nName is not allowed to be empty"));
    return res.sendStatus(422);
  }

  delete req.body.passwordConfirmation;

  const newUser = {
    ...req.body,
    name: stripHtml(req.body.name).result.trim(),
    email: req.body.email.trim(),
  };

  try {
    const isEmailInUse = await db
      .collection("accounts")
      .findOne({ email: newUser.email });

    if (isEmailInUse) {
      console.log(chalk.red("\nThis email is already being used"));
      return res.sendStatus(409);
    }
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

  res.locals.newUser = newUser;
  return next();
}

export async function validateUserLogin(req, res, next) {
  const { error } = userSignInSchema.validate(req.body);

  if (error) {
    console.log(error);
    return res.sendStatus(422);
  }

  const user = {
    ...req.body,
    email: req.body.email.trim(),
  };

  try {
    const registeredUser = await db.collection("accounts").findOne({
      email: user.email,
    });

    if (!registeredUser) {
      console.log(chalk.red("\nUser not found"));
      return res.sendStatus(404);
    }

    if (!compareSync(user.password, registeredUser.password)) {
      console.log(chalk.red("\nUser or password invalid"));
      return res.sendStatus(401);
    }

    res.locals.registeredUser = registeredUser;
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

  return next();
}
