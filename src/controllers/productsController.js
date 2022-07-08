import { db } from "../database/db.js";

export async function getProductsByCategory(_req, res) {
  const { category } = res.locals;
  const _id = category._id.toString();

  try {
    const products = await db.collection("products").find({}).toArray();
    const productsByCategory = products.filter((product) =>
      product.categories.map((category) => category.toString()).includes(_id)
    );

    res.status(200).send(productsByCategory);
  } catch (error) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function getProductById(_req, res) {
  const { product } = res.locals;

  return res.status(200).send(product);
}
