const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');

const upload = multer(uploadConfig);

const authMiddleware = require('../app/middlewares/auth');

const controller = require('../app/controllers/ProductController');

const productsRoutes = Router();

productsRoutes.get('/products', controller.index);
productsRoutes.post('/products', authMiddleware.auth, upload.single('image'), controller.store);
productsRoutes.put('/products/:id', authMiddleware.auth, upload.single('image'), controller.update);
productsRoutes.delete('/products/:id', authMiddleware.auth, controller.delete);

module.exports = { productsRoutes };
