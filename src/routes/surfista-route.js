const express = require('express');//aspas simples sem o caminho ele busca no node_modules
const router = express.Router();// arquivo de rotas;
const controller = require('../controllers/surfista-controller');

router.get('/surfista', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/surfista', controller.delete);

module.exports = router;