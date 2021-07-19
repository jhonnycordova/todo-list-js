const express = require('express');
const { validBody, validParams } = require('../util/validator/middlewares');
const { createToDoValidator, paramIdValidator, updateToDoValidator } = require('../util/validator/todo');

const router = express.Router();

router.post('/todo', validBody(createToDoValidator), (req, res) => {
  res.json(req.body);
});

router.get('/todo', (req, res) => {
  res.json({ todos: [] });
});

router.put('/todo/:id', validParams(paramIdValidator), validBody(updateToDoValidator), (req, res) => {
  const { id } = req.params;
  res.json({ ...req.body, id });
});

router.delete('/todo/:id', validParams(paramIdValidator), async (request, response) => {
  const { id } = request.params;
  /* eslint-disable */
  console.log(id);
  /* eslint-enable */
  response.status(204).end();
});

module.exports = router;
