// import libs
const express = require('express');
const cors = require('cors');
const app = express();

// import controllers
const rotasUsuarios = require('./controllers/usuario-controller');
const rotasTarefas = require('./controllers/tarefa-controller');

//import bd
const bd = require('./infra/sqlite-db');

//mildware
app.use(express.json());
app.use(cors());
//usando rotas
rotasUsuarios(app, bd);
rotasTarefas(app, bd);

app.listen(3050, () => console.log('Servidor funfando na porta 3050'));
