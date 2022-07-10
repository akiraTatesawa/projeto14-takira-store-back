import { Router } from "express";

import { getUserPurchases } from "../controllers/purchasesController.js";
import { verifyUserPurchases } from "../middlewares/purchasesMiddlewares.js";
import { validateToken } from "../middlewares/tokenMiddlewares.js";

export const purchasesRoute = Router();

purchasesRoute.get(
  "/purchases",
  validateToken,
  verifyUserPurchases,
  getUserPurchases
);
