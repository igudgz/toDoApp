// import libs
import express, { json, urlencoded } from 'express';
import cors from 'cors';
const app = express();

// import controllers
import rotasUsuarios from './controllers/usuario-controller.js';
import rotasTarefas from './controllers/tarefa-controller.js';

//import bd
import bd from './infra/sqlite-db.js';

//mildware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

//usando rotas
rotasUsuarios(app, bd);
rotasTarefas(app, bd);

app.listen(process.env.PORT, () =>
  console.log('Servidor funfando na porta 3050')
);
