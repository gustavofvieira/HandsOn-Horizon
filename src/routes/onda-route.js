const express = require('express');//aspas simples sem o caminho ele busca no node_modules
const router = express.Router();// arquivo de rotas;
const controller = require('../controllers/onda-controller');

router.post('/onda', controller.post);
router.put('/onda/:id', controller.put);
router.delete('/onda', controller.delete);

module.exports = router;