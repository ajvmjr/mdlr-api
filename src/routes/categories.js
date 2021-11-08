const { Router } = require('express');

const controller = require('../app/controllers/CategoryController');

const categoriesRoutes = Router();

categoriesRoutes.get('/categories', controller.index);
categoriesRoutes.post('/categories', controller.store);
categoriesRoutes.put('/categories/:id', controller.update);
categoriesRoutes.delete('/categories/:id', controller.delete);

module.exports = { categoriesRoutes };
