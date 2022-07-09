import { Router } from "express";

import { addProductToCart } from "../controllers/cartsController.js";

import { verifyCart } from "../middlewares/cartsMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddlewares.js";

export const cartsRoute = Router();

// use validateItem verification before
cartsRoute.post(
  "/carts/add-product",
  validateToken,
  verifyCart,
  addProductToCart
);
