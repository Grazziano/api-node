const express = require('express');
const app = express();

const productRoutes = require('./routes/products');
requestRoutes = require('./routes/requests');

app.use('/products', productRoutes);
app.use('/requests', requestRoutes);

app.use('/teste', (req, res, next) => {
  res.status(200).send({ message: 'OK, deu certo' });
});

module.exports = app;
