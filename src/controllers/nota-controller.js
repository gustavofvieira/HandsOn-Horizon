const restify = require('restify');
const errs = require('restify-errors');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'db'
    }
  });

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

//Rotas Rest


server.get('/nota', (req, res, next) => {
        knex('rest').then((dados)=> { // rest é o nome da tabela no banco
            res.send(dados);
        }, next)
    
});

server.post('/create', (req, res, next) => {
    knex('rest')
        .insert(req.body)
        .then((dados)=> { // rest é o nome da tabela no banco
        res.send(dados); // dados vai receber o id que foi criado no insert
    }, next)

});

server.get('/show/:id', (req, res, next) => {
    const { id } = req.params;

    knex('rest')
    .where('id', id)
    .first()
    .then((dados)=> { // rest é o nome da tabela no banco
        if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
        res.send(dados);
    }, next)

});

server.put('/update/:id', (req, res, next) => {
    const { id } = req.params;

    knex('rest')
    .where('id', id)
    .update(req.body)
    .then((dados)=> { // rest é o nome da tabela no banco
        if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
        res.send('dados atualizados');
    }, next)

});

server.del('/delete/:id', (req, res, next) => {
    const { id } = req.params;

    knex('rest')
    .where('id', id)
    .delete()
    .then((dados)=> { // rest é o nome da tabela no banco
        if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
        res.send('dados excluidos');
    }, next)

});

