const express = require('express');
const { config } = require('./config/config');
const Rollbar = require('./lib/rollbar');
// app
const app = express();

app.get('/', (req, res) => {
  // Rollbar.log('Awesome, this is a info log!');
  res.send('Hola Mundo');
});

// this will send exception to rollbar account
app.use(Rollbar.errorHandler());

// server
const server = app.listen(config.port || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${server.address().port}`);
});
