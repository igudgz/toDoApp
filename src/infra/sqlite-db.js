import sqlite3 from 'sqlite3';

import { resolve, dirname } from 'path';

const bd = new sqlite3.Database(
  '/home/igu/Área de Trabalho/backup-windows/Projetos Resilia/todoapp/toDoApp/src/infra/database.db'
);

//Processamento de sinal
process.on('SIGINT', () =>
  bd.close(() => {
    console.log('BD encerrado!');
    process.exit(0);
  })
);

export default bd;
