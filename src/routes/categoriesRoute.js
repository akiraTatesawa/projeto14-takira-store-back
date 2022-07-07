import { Router } from "express";

import { getCategories } from "../controllers/categoriesController.js";

import { validateToken } from "../middlewares/tokenMiddlewares.js";

export const categoriesRoute = Router();

categoriesRoute.get("/categories", getCategories);
