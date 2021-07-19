const { config } = require('./config/config');
const Rollbar = require('./lib/rollbar');
const connectDatabase = require('./database/connection');
const authController = require('./controllers/auth');
const app = require('./server');

async function main() {
  await connectDatabase();
  const server = app.listen(config.port || 3000, () => {
  // eslint-disable-next-line no-console
    console.info(`Listening http://localhost:${server.address().port}`);
  });

  app.use('/auth/', authController);
}

main()
  .catch((error) => {
    /* eslint-disable no-console */
    // TODO: use with rollbar
    console.log('Unexpected error');
    console.error(error);
    /* eslint-enable no-console */
  });
