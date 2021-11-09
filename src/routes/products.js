const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');

const upload = multer(uploadConfig);

const controller = require('../app/controllers/ProductController');

const productsRoutes = Router();

productsRoutes.get('/products', controller.index);
productsRoutes.post('/products', upload.single('image'), controller.store);
productsRoutes.put('/products/:id', upload.single('image'), controller.update);
productsRoutes.delete('/products/:id', controller.delete);

module.exports = { productsRoutes };
