const { Router } = require('express');
const routes = Router();
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

// Principais métodos http a utilizar get, post, put e delete
// Query Params: acessados atráves de request.query (Filtros, ordenacao, paginacao etc)
// Route Params: acessados atráves de request.params (identificar um recurso na alteracao ou remocao)
// Body : acessados atráves de request.body (dados para criacao ao alteracao de registros)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;