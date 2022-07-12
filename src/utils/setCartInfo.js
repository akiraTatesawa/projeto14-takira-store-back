import { ObjectId } from "mongodb";

import { db } from "../database/db.js";

export async function setCartInfo(cart, res) {
  const query = cart.products.map((product) => new ObjectId(product.productId));

  try {
    const productsFromCart = await db
      .collection("products")
      .find({ _id: { $in: query } })
      .toArray();

    const obj = {};
    // eslint-disable-next-line no-return-assign
    productsFromCart.forEach((x) => (obj[x._id] = x));
    const ordered = query.map((key) => obj[key]);

    const productsInfo = ordered.map(({ name, price }) => ({
      name,
      price,
    }));

    let total = 0;

    for (let i = 0; i < ordered.length; i += 1) {
      total += ordered[i].price * cart.products[i].quantity;
    }

    return { productsInfo, total };
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
