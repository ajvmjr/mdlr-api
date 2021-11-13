import { Router } from 'express';

import controller from '../app/controllers/AuthController';

const authRoutes = Router();

authRoutes.post('/auth', controller.auth);

export default authRoutes;
