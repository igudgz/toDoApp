// import libs
const express = require('express');
const app = express();

// import controllers
const usuariosController = require('./controllers/usuario-controller');
const tarefasController = require('./controllers/tarefa-controller');

//import models
const Usuario = require('./models/usuario');
const Tarefas = require('./models/tarefa');

//import bd
const bd = require('./infra/sqlite-db');

//mildware
app.use(express.json());
//usando rotas
usuariosController(app, bd);
tarefasController(app, bd);

app.listen(3050, () => console.log('Servidor funfando na porta 3050'));
