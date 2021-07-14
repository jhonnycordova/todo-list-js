const express = require('express');
const authService = require('../services/auth');

module.exports = () => {
  const router = express.Router();

  router.post('/login', async (req, res, next) => {
    try {
      const result = await authService.login(req.body);
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  });

  router.post('/signup', async (req, res, next) => {
    try {
      const result = await authService.signup(req.body);
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  });

  return router;
};
