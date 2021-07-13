const Rollbar = require('../../lib/rollbar');

const middleware = (schema, property) => (req, res, next) => {
  const { error } = schema.validate(req[property]);
  const isValid = error == null;

  if (isValid) next();
  else {
    const { details } = error;
    const message = details.map((i) => i.message).join(',');
    Rollbar.errorHandler(message);
    res.status(422).json({ error: message });
  }
};

const validBody = (schema) => middleware(schema, 'body')
const validParams = (schema) => middleware(schema, 'params')
module.exports = {validBody, validParams};
