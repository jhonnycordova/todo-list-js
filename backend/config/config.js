require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT,
  connectionString: process.env.CONNECTION_STRING,
  rollbarToken: process.env.ROLLBAR_TOKEN,
  environment: process.env.NODE_ENV,
  connectionStringTest: process.env.CONNECTION_STRING_TEST,
};

module.exports = { config };
