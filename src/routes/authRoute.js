import { Router } from "express";

import { postSignIn, registerUser } from "../controllers/authController.js";

import {
  validateUserLogin,
  validateUserRegistration,
} from "../middlewares/authMiddlewares.js";

export const authRoute = Router();

authRoute.post("/sign-up", validateUserRegistration, registerUser);
authRoute.post("/sign-in", validateUserLogin, postSignIn);
