const express = require('express');
const Rollbar = require('./lib/rollbar');
const todoRoutes = require('./controllers/todo');

const app = express();
app.use(express.json());
app.use('', todoRoutes);
app.get('/', (req, res) => {
  // Rollbar.log('Awesome, this is a info log!');
  res.send('Hola Mundo');
});

app.use(Rollbar.errorHandler());
module.exports = app;
