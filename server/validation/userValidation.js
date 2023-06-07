const Joi = require("joi");

const userSchema = Joi.object().keys({
  username: Joi.string().min(2).max(30).required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  basketItems: Joi.array().required(),
});

module.exports = userSchema;