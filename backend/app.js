const express = require('express');
const { config } = require('./config/config');
const Rollbar = require('rollbar');
const rollbar = new Rollbar({
  accessToken: config.rollbarToken,
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: config.environment,
});
// app
const app = express();

app.get('/', function (req, res) {
  // rollbar.info('Awesome, this is a info log!');
  res.send('Hola Mundo');
});

// this will send exception to rollbar account
app.use(rollbar.errorHandler());

// server
const server = app.listen(config.port || 3000, function () {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${server.address().port}`);
});
