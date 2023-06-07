const Joi = require("joi");

const productsSchema = Joi.object().keys({
  name: Joi.string().min(2).max(30).required(),
  price: Joi.number().required(),
  description: Joi.string().min(2).max(30).required(),
  imageURL: Joi.string().required(),
});

module.exports = productsSchema;