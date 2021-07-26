import TaskDAO from '../DAO/TaskDAO.js';

import Tarefa from '../models/tarefa.js';

export default (app, bd) => {
  const taskDAO = new TaskDAO(bd);
  app.get('/tarefas', async (req, res) => {
    try {
      let result = await taskDAO.getTarefas();
      res.status(200).json({
        result: result,
        error: false,
      });
    } catch (error) {
      res.status(404).json({ error: error.message, error: true });
    }
  });
  app.get('/tarefas/:id', async (req, res) => {
    let id = req.params.id;
    try {
      let result = await taskDAO.getTarefaId(id);
      if (result.length > 0) {
        res.status(200).json({
          result: result,
          error: false,
        });
      } else {
        throw new Error('Erro ao encontrar Tarefa.');
      }
    } catch (error) {
      res.status(404).json({ error: error.message, error: true });
    }
  });

  app.get('/tarefas/usuarios/:idUser', async (req, res) => {
    let idUser = req.params.idUser;
    try {
      let result = await taskDAO.getTarefaUsuario(idUser);
      if (result.length > 0) {
        res.status(200).json({
          result: result,
          error: false,
        });
      } else {
        throw new Error('Erro ao encontrar Tarefas ligadas a esse usuário.');
      }
    } catch (error) {
      res.status(404).json({ error: error.message, error: true });
    }
  });

  app.post('/tarefas', async (req, res) => {
    const { titulo, descricao, status, id_usuario } = req.body;
    let novaTarefa = new Tarefa(titulo, descricao, status, id_usuario);
    try {
      if (novaTarefa.length < 3 || novaTarefa == {}) {
        throw new Error('Erro ao adicionar tarefa, dados inválidos!');
      } else {
        let result = await taskDAO.geraTarefa(novaTarefa);
        res.status(201).json({
          messagem: 'Tarefa adicionada com sucesso!',
          result: result,
          error: false,
        });
      }
    } catch (error) {
      res.status(400).json({ error: error.message, error: true });
    }
  });
  app.put('/tarefas/:id', async (req, res) => {
    let { id } = req.params.id;
    let body = req.body;
    try {
      if (body == {}) {
        throw new Error('Erro ao adicionar tarefa,dados inválidos');
      } else {
        let result = await taskDAO.atualizaTarefa(id, body);
        if (result == undefined) {
          res.status(200).json({
            mensagem: 'Tarefa atualizada com sucesso!',
            result: result,
            error: false,
          });
        }
      }
    } catch (error) {
      res.status(400).json({
        mensagem: 'Erro ao atualizar tarefa.',
        error: error.message,
        error: true,
      });
    }
  });

  app.delete('/tarefas/:id', async (req, res) => {
    let { id } = req.params.id;
    try {
      let result = await taskDAO.deletaTarefa(id);
      console.log(result);
      if (result == undefined) {
        res.status(200).json({
          mensagem: 'Tarefa deletada com sucesso',
          result: result,
          error: false,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensagem: 'Erro ao deletar tarefa',
        error: error.message,
        error: true,
      });
    }
  });
};
