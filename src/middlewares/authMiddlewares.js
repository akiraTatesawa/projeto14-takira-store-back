// eslint-disable-next-line import/no-unresolved
import { stripHtml } from "string-strip-html";
import chalk from "chalk";

import { userRegistrationSchema } from "../schemas/authSchema.js";

import { db } from "../database/db.js";

export async function validateUserRegistration(req, res, next) {
  const { error } = userRegistrationSchema.validate(req.body);

  if (error) {
    console.log(error.details);
    return res.sendStatus(422);
  }

  if (stripHtml(req.body.name).result.trim().length === 0) {
    console.log(chalk.red("\nBlank name is not valid"));
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
