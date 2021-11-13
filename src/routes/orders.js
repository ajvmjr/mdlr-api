import { Router } from 'express';

import controller from '../app/controllers/OrderController';

import authMiddleware from '../app/middlewares/auth';

const ordersRoutes = Router();

ordersRoutes.get('/orders', authMiddleware.auth, controller.index);
ordersRoutes.post('/orders', authMiddleware.auth, controller.store);

export default ordersRoutes;
