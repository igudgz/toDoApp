import Usuario from '../models/usuario.js';
import UserDAO from '../DAO/UserDAO.js';

export default (app, bd) => {
  let userDAO = new UserDAO(bd);
  app.get('/usuarios', async (req, res) => {
    try {
      let result = await userDAO.getUsuarios();
      res.status(200).json({
        result: result,
        error: false,
      });
    } catch (error) {
      res.status(404).json({ error: error.message, error: true });
    }
  });

  app.get('/usuarios/:email', async (req, res) => {
    let email = req.params.email;
    try {
      let result = await userDAO.getUsuarioEmail(email);
      if (result.length > 0) {
        res.status(200).json({
          result: result,
          error: false,
        });
      } else {
        throw new Error('Nenhum usuário encontrado');
      }
    } catch (error) {
      res.status(404).json({ error: error.message, error: true });
    }
  });
  app.get('/usuarios/tarefas/:idTask', async (req, res) => {
    let idTask = req.params.idTask;
    try {
      let result = await userDAO.getUsuarioTarefa(idTask);

      if (result.length > 0) {
        res.status(200).json({ result: result });
      } else {
        throw new Error('Nenhum usuário encontrado');
      }
    } catch (error) {
      res.status(404).json({ error: error.message, error: true });
    }
  });

  app.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;
    let novoUsuario = new Usuario(nome, email, senha);
    try {
      if (nome == '' || email == '' || senha == '') {
        throw new Error('Erro ao adicionar usuário, dados inválidos!');
      }
      if (novoUsuario.length < 3 || novoUsuario == {}) {
        throw new Error('Erro ao adicionar usuário, dados inválidos!');
      } else {
        let result = await userDAO.geraUsuario(novoUsuario);
        res.status(201).json({
          menssagem: 'Usuário adicionado com sucesso!',
          result: result,
          error: false,
        });
      }
    } catch (error) {
      res.status(400).json({ error: error.message, error: true });
    }
  });

  app.put('/usuarios/:email', async (req, res) => {
    let emailUpdate = req.params.email;
    let body = req.body;
    try {
      if (body == {}) {
        throw new Error('Erro ao adicionar usuario,dados inválidos');
      } else {
        let result = await userDAO.atualizaUsuario(emailUpdate, body);
        if (result == undefined) {
          res.status(200).json({
            mensagem: 'Usuário atualizado com sucesso!',
            result: result,
            error: false,
          });
        }
      }
    } catch (error) {
      res.status(400).json({
        mensagem: 'Erro ao atualizar usuário.',
        error: error.message,
        error: true,
      });
    }
  });
  app.delete('/usuarios/:email', async (req, res) => {
    let parametroEmail = req.params.email;
    try {
      let result = await userDAO.deletaUsuario(parametroEmail);
      if (result == undefined) {
        res.status(200).json({
          mensagem: 'Usuário deletado com sucesso',
          result: result,
          error: true,
        });
      }
    } catch (error) {
      res.status(400).json({
        mensagem: 'Erro ao deletar usuário',
        error: error.message,
        error: true,
      });
    }
  });
};
