const express = require('express');
const Rollbar = require('./lib/rollbar');
const todoRoutes = require('./controllers/todo');

const app = express();
app.use(express.json());
app.use('/', todoRoutes);
app.use(Rollbar.errorHandler());
module.exports = app;
