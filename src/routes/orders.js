const { Router } = require('express');

const ordersRoutes = Router();

const controller = require('../app/controllers/OrderController');

const authMiddleware = require('../app/middlewares/auth');

ordersRoutes.get('/orders', authMiddleware.auth, controller.index);
ordersRoutes.post('/orders', authMiddleware.auth, controller.store);

module.exports = { ordersRoutes };
