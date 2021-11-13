import { Router } from 'express';

import controller from '../app/controllers/CategoryController';

const categoriesRoutes = Router();

categoriesRoutes.get('/categories', controller.index);
categoriesRoutes.post('/categories', controller.store);
categoriesRoutes.put('/categories/:id', controller.update);
categoriesRoutes.delete('/categories/:id', controller.delete);

export default categoriesRoutes;
