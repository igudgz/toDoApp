const TaskDAO = require('../DAO/TaskDAO');

const Tarefa = require('../models/tarefa');

module.exports = (app, bd) => {
  const taskDAO = new TaskDAO(bd);
  app.get('/tarefas', async (req, res) => {
    await taskDAO
      .getTarefas()
      .then((result) => {
        res.json({ result: result });
      })
      .catch((err) => {
        console.log(err);
        res.json({ menssagem: 'Erro ao encontrar tarefas' });
      });
  });
  app.get('/tarefas/:id', async (req, res) => {
    let id = req.params.id;
    await taskDAO
      .getTarefaTitulo(id)
      .then((result) => {
        res.json({ result });
      })
      .catch((err) => res.json({ erro: 'Erro ao encontrar Tarefa.' }));
  });

  app.get('/tarefas/usuarios/:idUser', async (req, res) => {
    let idUser = req.params.idUser;
    await taskDAO
      .getTarefaUsuario(idUser)
      .then((result) => {
        res.json({ result });
      })
      .catch((err) =>
        res.json({ erro: 'Erro ao encontrar Tarefas ligadas a esse usuário.' })
      );
  });

  app.post('/tarefas', async (req, res) => {
    const { titulo, descricao, status, id_usuario } = req.body;
    let novaTarefa = new Tarefa(titulo, descricao, status, id_usuario);
    console.log(novaTarefa);
    if ((req.body = {})) {
      res.json({ mensagem: 'Erro ao adicionar tarefa, dados inválidos!' });
    } else {
      await taskDAO
        .geraTarefa(novaTarefa)
        .then((result) => {
          res.json({ mensagem: 'Tarefa adicionada com sucesso' });
        })
        .catch((err) => res.json({ err }));
    }
  });
  app.put('/tarefas/:id', async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    await taskDAO
      .atualizaTarefa(id, body)
      .then((result) => res.json({ mensagem: 'Tarefa atualizada com sucesso' }))
      .catch((err) => res.json({ err }));
  });

  app.delete('/tarefas/:titulo', async (req, res) => {
    let parametroTitulo = req.params.titulo;
    await taskDAO
      .deletaTarefa(parametroTitulo)
      .then((result) => {
        res.json({
          mensagem: `Tarefa ${parametroTitulo} deletada`,
        });
      })
      .catch((err) => res.json({ err }));
  });
};
