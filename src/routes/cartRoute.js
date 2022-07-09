import { Router } from "express";

import { validateToken } from "../middlewares/tokenMiddlewares.js";
import {
  validateProductId,
  validateItem,
} from "../middlewares/cartMiddlewares.js";

import { getCartItems, deleteCartItem } from "../controllers/cartController.js";

export const cartRoute = Router();

cartRoute.get("/shopping-cart", validateToken, getCartItems);
cartRoute.delete(
  "/shopping-cart/:productId",
  validateToken,
  validateProductId,
  deleteCartItem
);
