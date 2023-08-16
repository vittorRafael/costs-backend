const express = require('express');
const routes = express.Router();

const ProjetoController = require('./controllers/ProjetoController');
const CategoriaController = require('./controllers/CategoriaController');

//Projetos
routes.get('/projetos', ProjetoController.read);
routes.post('/projetos', ProjetoController.create);
routes.get('/projetos/:id', ProjetoController.readId);
routes.patch('/projetos/:id', ProjetoController.edit);
routes.delete('/projetos/:id', ProjetoController.delete);

//Categorias
routes.get('/categorias', CategoriaController.read);
routes.post('/categorias', CategoriaController.create);
routes.delete('/categorias/:id', CategoriaController.delete);

module.exports = routes;
