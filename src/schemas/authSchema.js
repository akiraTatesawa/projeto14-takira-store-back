import joi from "joi";

export const userRegistrationSchema = joi.object({
  name: joi.string().required().min(1).max(20),
  email: joi.string().required().min(1).max(30),
  password: joi.string().required().min(1),
  passwordConfirmation: joi.string().required().valid(joi.ref("password")),
});

export const userSignInSchema = joi.object({
  email: joi.string().required().min(1).max(30),
  password: joi.string().required().min(1),
});
