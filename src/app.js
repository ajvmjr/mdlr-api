const express = require('express');
const { categoriesRoutes } = require('./routes/categories');

const app = express();

app.use(express.json());
app.use(categoriesRoutes);

module.exports = { app };
