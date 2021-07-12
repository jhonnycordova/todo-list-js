require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT,
  rollbarToken: process.env.ROLLBAR_TOKEN,
  environment: process.env.NODE_ENV,
  connectionStringTest: process.env.CONNECTION_STRING_TEST,
};

module.exports = { config };
