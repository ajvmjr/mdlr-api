const { Router } = require('express');

const authRoutes = Router();

const controller = require('../app/controllers/AuthController');

authRoutes.post('/auth', controller.auth);

module.exports = { authRoutes };
