import { Router } from "express";

import {
  getCartItems,
  deleteCartItem,
  addProductToCart,
} from "../controllers/cartsController.js";

import {
  validateProductId,
  validateItem,
  verifyCart,
} from "../middlewares/cartsMiddlewares.js";
import { validateToken } from "../middlewares/tokenMiddlewares.js";

export const cartsRoute = Router();

cartsRoute.post(
  "/carts/add-product",
  validateToken,
  validateItem,
  verifyCart,
  addProductToCart
);
cartsRoute.get("/shopping-cart", validateToken, getCartItems);
cartsRoute.delete(
  "/shopping-cart/:productId",
  validateToken,
  validateProductId,
  deleteCartItem
);
