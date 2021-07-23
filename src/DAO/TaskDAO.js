class TaskDAO {
  constructor(bd) {
    this._bd = bd;
  }

  getTarefas() {
    const select = 'SELECT * FROM TAREFAS';
    return new Promise((resolve, reject) => {
      this._bd.all(select, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  getTarefaId(id) {
    let idT = id;
    const selectCondition = 'SELECT * FROM TAREFAS WHERE id = ?';
    return new Promise((resolve, reject) => {
      this._bd.all(selectCondition, idT, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  getTarefaUsuario(idUser) {
    const selectUser =
      'SELECT * FROM TAREFAS INNER JOIN USUARIOS  ON  TAREFAS.ID_USUARIO = USUARIOS.ID WHERE TAREFAS.ID_USUARIO = ?';
    return new Promise((resolve, reject) => {
      this._bd.all(selectUser, idUser, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  geraTarefa(tarefa) {
    let { titulo, descricao, status, dataCriacao, criador } = tarefa;
    let parametros = [titulo, descricao, status, dataCriacao, criador];
    const create =
      'INSERT INTO TAREFAS ( TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO)  VALUES (?,?,?,?,?)';
    return new Promise((resolve, reject) => {
      this._bd.run(create, parametros, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          console.log(rows);
          resolve(rows);
        }
      });
    });
  }

  atualizaTarefa(param, body) {
    let { titulo, descricao, status, criador } = body;
    let parametros = [titulo, descricao, status, criador, param];
    const update =
      'UPDATE USUARIOS SET  titulo = ?, descricao = ?, status = ?, id_usuario = ? WHERE titulo = ?';
    return new Promise((resolve, reject) => {
      this._bd.run(update, parametros, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  deletaTarefa(id) {
    const deletar = 'DELETE  FROM Tarefas WHERE ID = ?';
    return new Promise((resolve, reject) => {
      this._bd.run(deletar, id, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}
module.exports = TaskDAO;
