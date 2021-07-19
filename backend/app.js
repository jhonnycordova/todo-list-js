const express = require('express');
const { config } = require('./config/config');
const Rollbar = require('./lib/rollbar');
const connectDatabase = require('./database/connection');
const authController = require('./controllers/auth');

async function main() {
  await connectDatabase();
  const app = express();

  app.use('/auth/', authController);

  // this will send exception to rollbar account
  app.use(Rollbar.errorHandler());

  const server = app.listen(config.port || 3000, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening http://localhost:${server.address().port}`);
  });
}

main()
  .catch((error) => {
    /* eslint-disable no-console */
    // TODO: use with rollbar
    console.log('Unexpected error');
    console.error(error);
    /* eslint-enable no-console */
  });
