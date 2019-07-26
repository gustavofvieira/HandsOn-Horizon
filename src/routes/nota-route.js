const express = require('express');//aspas simples sem o caminho ele busca no node_modules
const router = express.Router();// arquivo de rotas;
const controller = require('../controllers/nota-controller');

router.post('/nota', controller.post);
router.put('/nota/:id', controller.put);
router.delete('/nota', controller.delete);

module.exports = router;