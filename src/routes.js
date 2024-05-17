const express = require('express');
const controller = require('./controllers/controller');

const routes = express.Router();

routes.get('/', controller.raiz);
routes.get('/clientes', controller.clientes);


module.exports = routes;