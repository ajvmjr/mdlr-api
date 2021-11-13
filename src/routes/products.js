import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import authMiddleware from '../app/middlewares/auth';

import controller from '../app/controllers/ProductController';

const upload = multer(uploadConfig);

const productsRoutes = Router();

productsRoutes.get('/products', controller.index);
productsRoutes.post('/products', authMiddleware.auth, upload.single('image'), controller.store);
productsRoutes.put('/products/:id', authMiddleware.auth, upload.single('image'), controller.update);
productsRoutes.delete('/products/:id', authMiddleware.auth, controller.delete);

export default productsRoutes;
