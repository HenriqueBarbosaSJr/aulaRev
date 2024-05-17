const express = require('express');
const controller = require('./controllers/controller');

const routes = express.Router();

routes.get('/', controller.raiz);
routes.get('/clientes', controller.clientes);
routes.get('/produtos', controller.produtos);


module.exports = routes;