import "./config/config.js";

import express from "express";
import cors from "cors";
import chalk from "chalk";

import { authRoute } from "./routes/authRoute.js";
import { categoriesRoute } from "./routes/categoriesRoute.js";
import { productsRoute } from "./routes/productsRoute.js";
import { cartsRoute } from "./routes/cartsRoute.js";
import { purchasesRoute } from "./routes/purchasesRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(authRoute);
app.use(categoriesRoute);
app.use(productsRoute);
app.use(cartsRoute);
app.use(purchasesRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    chalk.bgGreen.black.bold(
      `\nServer running on port ${process.env.PORT || "5000"}...`
    )
  );
});
