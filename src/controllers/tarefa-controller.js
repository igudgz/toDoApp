module.exports = (app) => {
  app.get("/tarefas", (req, res) => {
    res.send(
      "Rota ativada com GET e recurso tarefas: valores de tarefas devem ser retornados"
    );
  });
  app.post("/tarefas", (req, res) => {
    res.send("Rota POST de tarefa ativada:tarefa adicionada ao banco de dados");
  });
};
