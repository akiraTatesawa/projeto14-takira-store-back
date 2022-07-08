import { Router } from "express";

import { validateToken } from "../middlewares/tokenMiddlewares.js";
import { validateCategory } from "../middlewares/productsMiddlewares.js";

import { getProductsByCategory } from "../controllers/productsController.js";

export const productsRoute = Router();

productsRoute.get(
  "/products/:categoryId",
  validateCategory,
  getProductsByCategory
);
