import { db } from '../databases/mongodb.js';
import { categories } from '../datas.js';

const insertCategories = async (_req, res) => {
  try {
    await db.collection('categories').insertMany(categories);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export { insertCategories };
