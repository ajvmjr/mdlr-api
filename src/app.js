import express from 'express';

import path from 'path';

import cors from 'cors';

import categoriesRoutes from './routes/categories';
import productsRoutes from './routes/products';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import ordersRoutes from './routes/orders';
import cepRoutes from './routes/cep';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(categoriesRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use(productsRoutes);
app.use(ordersRoutes);
app.use(cepRoutes);

app.listen(3001, () => console.log('Server on at 3001'));

export default app;
