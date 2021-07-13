const Rollbar = require('rollbar');
const { config } = require('../config/config');

const rollbar = new Rollbar({
  accessToken: config.rollbarToken,
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: config.environment,
});

module.exports = rollbar;
