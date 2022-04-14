const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./routes/products');
const requestRoutes = require('./routes/requests');

app.use(morgan('dev'));

app.use('/products', productRoutes);
app.use('/requests', requestRoutes);

// Quando não encontra a RemotePlayback, entra aqui
app.use((req, res, next) => {
  const error = new Error('Não encontrado');
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      message: error.message,
    },
  });
});

module.exports = app;
