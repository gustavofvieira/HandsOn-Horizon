const express = require('');//aspas simples sem o caminho ele busca no node_modules
const router = express.Router();// arquivo de rotas;
const controller = require('../controllers/surfista-controller');

router.get('/surfista', controller.get);
router.post('/surfista/create', controller.post);
router.put('/surfista/update/:id', controller.put);
router.delete('/surfista/delete/:id', controller.delete);

module.exports = router;