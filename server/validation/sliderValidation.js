const Joi = require("joi");

const sliderSchema = Joi.object().keys({
  name: Joi.string().min(2).max(30).required(),
  imageURL: Joi.string().required(),
});

module.exports = sliderSchema;