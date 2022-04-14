const express = require('express');
const router = express.Router();

// Retorna todos os pedidos
router.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Retorna os pedidos' });
});

// Insere um produto
router.post('/', (req, res, next) => {
  res.status(201).send({ message: 'O pedido foi criado' });
});

// Retorna os dados de um produto
router.get('/:id_pedido', (req, res, next) => {
  const id = req.params.id_pedido;
  res.status(200).json({ message: 'Detalhes do pedido', idPedido: id });
});

// Exclui um produto
router.delete('/:id', (req, res, next) => {
  res.status(201).send({ message: 'Pedido excluído' });
});

module.exports = router;
