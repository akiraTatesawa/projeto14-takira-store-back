import './config/config.js';

import express from 'express';
import cors from 'cors';
import chalk from 'chalk';

import categoriesRoute from './routes/categoriesRoute.js';
import productsRoute from './routes/productsRoute.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/categories', categoriesRoute);
app.use('/products', productsRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(chalk.bgGreen.black.bold(`\nServer running on port ${process.env.PORT || '5000'}...`));
});
