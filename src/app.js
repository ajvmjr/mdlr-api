const express = require('express');
const path = require('path');

const { categoriesRoutes } = require('./routes/categories');
const { productsRoutes } = require('./routes/products');
const { authRoutes } = require('./routes/auth');
const { userRoutes } = require('./routes/user');

const app = express();

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(categoriesRoutes);
app.use(productsRoutes);
app.use(authRoutes);
app.use(userRoutes);

module.exports = { app };
