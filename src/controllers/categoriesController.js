import { db } from "../database/db.js";

export async function getCategories(_req, res) {
  try {
    const categories = await db.collection("categories").find({}).toArray();
    return res.status(200).send(categories);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
