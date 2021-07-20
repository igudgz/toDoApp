const moment = require('moment');

class Tarefa {
  constructor(titulo, descricao, status, criador) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.status = status;
    this.dataCriacao = moment(Date.now()).format('DD/MM/YYYY HH:mm:ss');
    this.criador = criador;
  }
}
module.exports = Tarefa;
