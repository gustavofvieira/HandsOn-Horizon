const server = require('../../index');


server.get('/surfista', (req, res, next) => {
    knex('surfista').then((dados)=> { // rest é o nome da tabela no banco
        res.send(dados);
    }, next)
  
  });
  
  
  server.post('/surfista/create', (req, res, next) => {
    knex('surfista')
        .insert(req.body)
        .then((dados)=> { // rest é o nome da tabela no banco
        res.send(dados); // dados vai receber o id que foi criado no insert
    }, next)
  
  });
  
  server.get('/surfista/show/:id', (req, res, next) => {
    const { id } = req.params;
  
    knex('surfista')
    .where('id', id)
    .first()
    .then((dados)=> { // rest é o nome da tabela no banco
        if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
        res.send(dados);
    }, next)
  
  });
  
  server.put('/surfista/update/:id', (req, res, next) => {
    const { id } = req.params;
  
    knex('surfista')
    .where('id', id)
    .update(req.body)
    .then((dados)=> { // rest é o nome da tabela no banco
        if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
        res.send('dados atualizados');
    }, next)
  
  });
  
  server.del('/surfista/delete/:id', (req, res, next) => {
    const { id } = req.params;
  
    knex('surfista')
    .where('id', id)
    .delete()
    .then((dados)=> { // rest é o nome da tabela no banco
        if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
        res.send('dados excluidos');
    }, next)
  
  });
  
  