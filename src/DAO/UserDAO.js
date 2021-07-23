class UserDAO {
  constructor(bd) {
    this._bd = bd;
  }

  getUsuarios() {
    const select = 'SELECT * FROM USUARIOS';
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

  getUsuarioEmail(email) {
    let emailP = email;
    const selectCondition = 'SELECT * FROM USUARIOS WHERE EMAIL = ?';
    return new Promise((resolve, reject) => {
      this._bd.all(selectCondition, emailP, (err, rows) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  getUsuarioTarefa(idTarefa) {
    const selectTask =
      'SELECT * FROM USUARIOS INNER JOIN TAREFAS ON  TAREFAS.ID_USUARIO = USUARIOS.ID WHERE TAREFAS.ID_USUARIO = ?';
    return new Promise((resolve, reject) => {
      this._bd.all(selectTask, idTarefa, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  geraUsuario(usuario) {
    let { nome, email, senha } = usuario;
    let parametros = [nome, email, senha];
    const create = 'INSERT INTO USUARIOS (nome, email, senha)  VALUES (?,?,?)';
    return new Promise((resolve, reject) => {
      this._bd.run(create, parametros, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  atualizaUsuario(param, body) {
    let { nome, email, senha } = body;
    let parametros = [nome, email, senha, param];
    const update =
      'UPDATE USUARIOS SET  nome = ?, email = ?, senha = ? WHERE email = ?';
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

  deletaUsuario(email) {
    console.log(email);
    const deletar = 'DELETE  FROM USUARIOS WHERE email = ?';
    return new Promise((resolve, reject) => {
      this._bd.run(deletar, email, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}
module.exports = UserDAO;
