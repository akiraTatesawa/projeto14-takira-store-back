import { db } from '../databases/mongodb.js';
import { products } from '../datas.js';

const insertProducts = async (_req, res) => {
  try {
    await db.collection('products').insertMany(products);
    res.sendStatus(200);
  } catch (error) {
    console.log('error');
    console.log(error);
    res.sendStatus(500);
  }
};

export { insertProducts };
