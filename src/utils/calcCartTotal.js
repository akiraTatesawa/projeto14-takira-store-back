import { ObjectId } from "mongodb";

import { db } from "../database/db.js";

export async function calcCartTotal(cart, res) {
  const query = cart.products.map((product) => new ObjectId(product.productId));

  try {
    const productsFromCart = await db
      .collection("products")
      .find({ _id: { $in: query } })
      .toArray();

    let total = 0;

    for (let i = 0; i < productsFromCart.length; i += 1) {
      total += productsFromCart[i].price * cart.products[i].quantity;
    }

    return total;
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
