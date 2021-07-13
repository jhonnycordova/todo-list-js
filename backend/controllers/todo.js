const express = require('express');
const { validBody, validParams } = require('../util/validator/middlewares');
const validators = require('../util/validator/todo');

const router = express.Router();
router.post('/get', (req, res) => {
  res.json({ todos: []});
});

router.post('/todo', validBody(validators.createToDoValidator), (req, res) => {
  // Rollbar.log('Awesome, this is a info log!');
  res.json({ message: 'success' });
});

module.exports = router;
