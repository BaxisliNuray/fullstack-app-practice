const Joi = require('joi');

const categoriesSchema = Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
})

module.exports = categoriesSchema