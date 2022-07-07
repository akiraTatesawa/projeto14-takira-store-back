import "./config/config.js";

import express from "express";
import cors from "cors";
import chalk from "chalk";

import { authRoute } from "./routes/authRoute.js";
import { categoriesRoute } from "./routes/categoriesRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(authRoute);
app.use(categoriesRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    chalk.bgGreen.black.bold(
      `\nServer running on port ${process.env.PORT || "5000"}...`
    )
  );
});
