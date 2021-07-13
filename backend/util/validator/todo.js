const Joi = require('joi');

const paramIdValidator = Joi.object({
  text: Joi.string().min(3).max(360).required(),
  order: Joi.number(),
});

const createToDoValidator = Joi.object({
  text: Joi.string().min(3).max(360).required(),
  order: Joi.number(),
});

module.exports.createToDoValidator = createToDoValidator;
