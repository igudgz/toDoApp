const usuarios = require("./controllers/usuario-controller");
const tarefas = require("./controllers/tarefa-controller");
const express = require("express");
const app = express();

usuarios(app);
tarefas(app);

app.listen(3050, () => console.log("Servidor funfando na porta 3050"));
