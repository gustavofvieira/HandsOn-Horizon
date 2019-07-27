const restify = require('restify');


const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

const cors = require('cors');
server.use(cors());//cors vazio para qualquer cliente que quiser acessar a requisição ter acesso.

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'handson-hzn'
    }
  });

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.listen(process.env.PORT || 8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

// *****------------------------INICIO ROTAS------------------------*****

//Inicio Rotas Surfista
server.get('/surfista', (req, res, next) => {
  knex('surfista').then((dados)=> {  
      res.send(dados);
  }, next)

});


server.post('/surfista/create', (req, res, next) => {
  knex('surfista')
      .insert(req.body)
      .then((dados)=> {  
      res.send(dados);  
  }, next)

});

server.get('/surfista/show/:id', (req, res, next) => {
  const { id } = req.params;

  knex('surfista')
  .where('id', id)
  .first()
  .then((dados)=> {  
      if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
      res.send(dados);
  }, next)

});

server.put('/surfista/update/:id', (req, res, next) => {
  const { id } = req.params;

  knex('surfista')
  .where('id', id)
  .update(req.body)
  .then((dados)=> {  
      if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
      res.send('dados atualizados');
  }, next)

});

server.del('/surfista/delete/:id', (req, res, next) => {
  const { id } = req.params;

  knex('surfista')
  .where('id', id)
  .delete()
  .then((dados)=> {  
      if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
      res.send('dados excluidos');
  }, next)

});
//Término Rotas Surfista

//Inicio Rotas Bateria
server.get('/bateria', (req, res, next) => {
  knex('bateria').then((dados)=> {  
      res.send(dados);
  }, next)

});


server.post('/bateria/create', (req, res, next) => {
  knex('bateria')
      .insert(req.body)
      .then((dados)=> {  
      res.send(dados);  
  }, next)

});

server.get('/bateria/show/:id', (req, res, next) => {
  const { id } = req.params;

  knex('bateria')
  .where('id', id)
  .first()
  .then((dados)=> {  
      if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
      res.send(dados);
  }, next)

});

server.put('/bateria/update/:id', (req, res, next) => {
  const { id } = req.params;

  knex('bateria')
  .where('id', id)
  .update(req.body)
  .then((dados)=> {  
      if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
      res.send('dados atualizados');
  }, next)

});

server.del('/bateria/delete/:id', (req, res, next) => {
  const { id } = req.params;

  knex('bateria')
  .where('id', id)
  .delete()
  .then((dados)=> {  
      if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
      res.send('dados excluidos');
  }, next)

});
//Término Rotas Bateria

//Inicio Rotas Nota
server.get('/nota', (req, res, next) => {
  knex('nota').then((dados)=> {  
      res.send(dados);
  }, next)

});


server.post('/nota/create', (req, res, next) => {
  knex('nota')
      .insert(req.body)
      .then((dados)=> {  
      res.send(dados);  
  }, next)

});

server.get('/nota/show/:id', (req, res, next) => {
  const { id } = req.params;

  knex('nota')
  .where('id', id)
  .first()
  .then((dados)=> {  
      if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
      res.send(dados);
  }, next)

});

server.put('/nota/update/:id', (req, res, next) => {
  const { id } = req.params;

  knex('nota')
  .where('id', id)
  .update(req.body)
  .then((dados)=> {  
      if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
      res.send('dados atualizados');
  }, next)

});

server.del('/nota/delete/:id', (req, res, next) => {
  const { id } = req.params;

  knex('nota')
  .where('id', id)
  .delete()
  .then((dados)=> {  
      if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
      res.send('dados excluidos');
  }, next)

});
//Término Rotas Nota

//Inicio Rotas Onda
server.get('/onda', (req, res, next) => {
  knex('onda').then((dados)=> {  
      res.send(dados);
  }, next)

});


server.post('/onda/create', (req, res, next) => {
  knex('onda')
      .insert(req.body)
      .then((dados)=> {  
      res.send(dados);  
  }, next)

});

server.get('/onda/show/:id', (req, res, next) => {
  const { id } = req.params;

  knex('onda')
  .where('id', id)
  .first()
  .then((dados)=> {  
      if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
      res.send(dados);
  }, next)

});

server.put('/onda/update/:id', (req, res, next) => {
  const { id } = req.params;

  knex('onda')
  .where('id', id)
  .update(req.body)
  .then((dados)=> {  
      if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
      res.send('dados atualizados');
  }, next)

});

server.del('/onda/delete/:id', (req, res, next) => {
  const { id } = req.params;

  knex('onda')
  .where('id', id)
  .delete()
  .then((dados)=> {  
      if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
      res.send('dados excluidos');
  }, next)

});
//Término Rotas Onda


// *****------------------------TÉRMINO ROTAS------------------------*****