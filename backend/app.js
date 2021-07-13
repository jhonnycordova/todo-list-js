const { config } = require('./config/config');
const app = require('./server');

// server
const server = app.listen(config.port || 3000, () => {
  // eslint-disable-next-line no-console
  console.info(`Listening http://localhost:${server.address().port}`);
});
