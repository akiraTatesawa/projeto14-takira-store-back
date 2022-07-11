import { Router } from "express";

import {
  deleteSession,
  postSignIn,
  registerUser,
} from "../controllers/authController.js";

import {
  validateUserLogin,
  validateUserRegistration,
} from "../middlewares/authMiddlewares.js";

import { validateToken } from "../middlewares/tokenMiddlewares.js";

export const authRoute = Router();

authRoute.post("/sign-up", validateUserRegistration, registerUser);
authRoute.post("/sign-in", validateUserLogin, postSignIn);
authRoute.delete("/sign-out", validateToken, deleteSession);
