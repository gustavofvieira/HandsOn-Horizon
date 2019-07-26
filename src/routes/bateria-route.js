const express = require('express');//aspas simples sem o caminho ele busca no node_modules
const router = express.Router();// arquivo de rotas;
const controller = require('../controllers/bateria-controller');

router.post('/bateria', controller.post);
router.put('/bateria/:id', controller.put);
router.delete('/bateria', controller.delete);

module.exports = router;