import { Router } from "express";

import {
  getCartItems,
  deleteCartItem,
  addProductToCart,
  getUserCartData,
  finishOrder,
} from "../controllers/cartsController.js";

import {
  validateProductId,
  validateItem,
  createCart,
  verifyCart,
  validateCartId,
} from "../middlewares/cartsMiddlewares.js";
import { validateToken } from "../middlewares/tokenMiddlewares.js";

export const cartsRoute = Router();

cartsRoute.delete(
  "/checkout/:cartId",
  validateToken,
  validateCartId,
  finishOrder
);
cartsRoute.get("/carts", validateToken, verifyCart, getUserCartData);
cartsRoute.post(
  "/carts/add-product",
  validateToken,
  validateItem,
  createCart,
  addProductToCart
);
cartsRoute.get("/shopping-cart", validateToken, getCartItems);
cartsRoute.delete(
  "/shopping-cart/:productId",
  validateToken,
  validateProductId,
  deleteCartItem
);
