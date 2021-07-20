const Usuario = require('../models/usuario');
const UserDAO = require('../DAO/UserDAO');
module.exports = (app, bd) => {
  let userDAO = new UserDAO(bd);
  app.get('/usuarios', async (req, res) => {
    await userDAO
      .getUsuarios()
      .then((result) => {
        res.json({ result: result });
      })
      .catch((err) => {
        console.log(err);
        res.json({ mensagem: 'Erro ao encontrar usuários' });
      });
  });

  app.get('/usuarios/:email', async (req, res) => {
    let email = req.params.email;
    userDAO
      .getUsuarioEmail(email)
      .then((result) => {
        res.json({ result: result });
      })
      .catch((err) => res.json({ erro: 'Erro ao encontrar usuário.' }));
  });
  app.get('/usuarios/tarefas/:idTask', (req, res) => {
    let idTask = req.params.idTask;
    userDAO
      .getUsuarioTarefa(idTask)
      .then((result) => {
        res.json({ result });
      })
      .catch((err) =>
        res.json({ erro: 'Erro ao encontrar Tarefas ligadas a esse usuário.' })
      );
  });

  app.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;
    let novoUsuario = new Usuario(nome, email, senha);
    if ((req.body = {})) {
      res
        .status(404)
        .json({ mensagem: 'Erro ao adicionar usuário, dados inválidos!' });
    } else {
      await userDAO
        .geraUsuario(novoUsuario)
        .then((result) =>
          res.json({
            messagem: 'Usuário adicionado com sucesso!',
            result: result,
          })
        )
        .catch((err) =>
          res.json({ mensagem: 'Erro ao adiconar usuário ao banco de dados.' })
        );
    }
  });

  app.put('/usuarios/:email', async (req, res) => {
    let emailUpdate = req.params.email;
    let body = req.body;
    await userDAO
      .atualizaUsuario(emailUpdate, body)
      .then((result) =>
        res.json({ mensagem: 'Usuário atualizado com sucesso!' })
      )
      .catch((err) => res.json({ mensagem: 'Erro ao atualizar usuário.' }));
  });
  app.delete('/usuario/:email', async (req, res) => {
    let parametroEmail = req.params.email;
    await userDAO
      .deletaUsuario(parametroEmail)
      .then((result) => res.json({ mensagem: 'Usuário deletado com sucesso' }))
      .catch((err) => res.json({ mensagem: 'Erro ao adiconar usuário' }));
  });
};
