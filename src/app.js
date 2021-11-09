const express = require('express');
const path = require('path');
const { categoriesRoutes } = require('./routes/categories');
const { productsRoutes } = require('./routes/products');

const app = express();

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(categoriesRoutes);
app.use(productsRoutes);

module.exports = { app };
