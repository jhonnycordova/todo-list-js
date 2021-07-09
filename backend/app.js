const express = require('express');
const { config } = require('./config/config');
// app
const app = express();

app.get('/', function (req, res) {
  res.send('Hola Mundo');
});

// server
const server = app.listen(config.port || 3000, function () {
  console.log(`Listening http://localhost:${server.address().port}`);
});
