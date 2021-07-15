const Joi = require('joi');

const paramIdValidator = Joi.object({
  id: Joi.string().min(3).max(360).required(),
});

const createToDoValidator = Joi.object({
  text: Joi.string().min(3).max(360).required(),
  order: Joi.number().min(0),
});

const updateToDoValidator = Joi.object({
  text: Joi.string().min(3).max(360).required(),
  order: Joi.number().min(0).required(),
  isCompleted: Joi.bool().required(),
});

module.exports.createToDoValidator = createToDoValidator;
module.exports.updateToDoValidator = updateToDoValidator;
module.exports.paramIdValidator = paramIdValidator;
