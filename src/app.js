import express from 'express';

import path from 'path';
import categoriesRoutes from './routes/categories';
import productsRoutes from './routes/products';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import ordersRoutes from './routes/orders';

const app = express();

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(categoriesRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use(productsRoutes);
app.use(ordersRoutes);

app.listen(3000, () => console.log('Server on at 3000'));

export default app;
