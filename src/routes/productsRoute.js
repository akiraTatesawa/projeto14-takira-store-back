import { Router } from "express";

import { validateToken } from "../middlewares/tokenMiddlewares.js";
import {
  validateCategory,
  validateProduct,
} from "../middlewares/productsMiddlewares.js";

import {
  getProductById,
  getProductsByCategory,
  getBestSellers,
} from "../controllers/productsController.js";

export const productsRoute = Router();

productsRoute.get(
  "/products/:categoryId",
  validateToken,
  validateCategory,
  getProductsByCategory
);
productsRoute.get(
  "/product/:productId",
  validateToken,
  validateProduct,
  getProductById
);
productsRoute.get("/best-sellers", validateToken, getBestSellers);
