import { db } from "../database/db.js";

export async function getProductsByCategory(req, res) {
  const { category } = res.locals;
  const { name } = category;

  try {
    const products = await db.collection("products").find({}).toArray();
    const productsByCategory = products.filter((product) =>
      product.categories.includes(name)
    );

    res.status(200).send(productsByCategory);
  } catch (error) {
    console.log(err);
    return res.sendStatus(500);
  }
}
