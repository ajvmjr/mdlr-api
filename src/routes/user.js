const { Router } = require('express');

const userRoutes = Router();

const controller = require('../app/controllers/UserController');

userRoutes.post('/users', controller.store);

module.exports = { userRoutes };
