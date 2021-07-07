module.exports = (app) => {
  app.get("/usuarios", (req, res) => {
    res.send("Rastreamento da aplicaçao feita com nodemon");
  });
  app.post("/usuarios", (req, res) => {
    res.send(
      "Rota POST de usuario ativada:usuario adicionada ao banco de dados"
    );
  });
};
