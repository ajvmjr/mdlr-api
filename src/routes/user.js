import { Router } from 'express';

import controller from '../app/controllers/UserController';

const userRoutes = Router();

userRoutes.post('/users', controller.store);

export default userRoutes;
