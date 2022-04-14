const express = require('express');
const router = express.Router();

// Retorna todos os produtos
router.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Retorna todos os produtos' });
});

// Insere um produto
router.post('/', (req, res, next) => {
  res.status(201).send({ message: 'Insere um produto' });
});

// Retorna os dados de um produto
router.get('/:id_produto', (req, res, next) => {
  const id = req.params.id_produto;

  if (id === 'especial') {
    res.status(200).json({ message: 'Você descobriu o id especial', id });
  } else {
    res.status(200).json({ message: 'Usando get de produto exclusivo', id });
  }
});

// Altera um produto
router.patch('/', (req, res, next) => {
  res.status(201).send({ message: 'Produto alterado' });
});

// Exclui um produto
router.delete('/:id', (req, res, next) => {
  res.status(201).send({ message: 'Produto excluído' });
});

module.exports = router;
