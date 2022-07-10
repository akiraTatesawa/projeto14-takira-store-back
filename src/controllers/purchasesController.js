export async function getUserPurchases(_req, res) {
  const { purchases } = res.locals;
  return res.send(purchases);
}
