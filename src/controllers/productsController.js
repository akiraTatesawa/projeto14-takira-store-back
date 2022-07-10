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

export async function getBestSellers(_req, res) {
  try {
    const bestSellers = await db
      .collection("products")
      .find({})
      .sort({ numberOfPurchases: -1 })
      .limit(2)
      .toArray();
    res.status(200).send(bestSellers);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
