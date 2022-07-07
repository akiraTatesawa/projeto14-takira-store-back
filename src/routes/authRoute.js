import { Router } from "express";

import { registerUser } from "../controllers/authController.js";

import { validateUserRegistration } from "../middlewares/authMiddlewares.js";

export const authRoute = Router();

authRoute.post("/sign-up", validateUserRegistration, registerUser);
