import Joi from "joi";

export const cartSchema = Joi.object({
  productId: Joi.string().required(),
  quantity: Joi.number().integer().required(),
});
