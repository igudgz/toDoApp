function criaCardTarefas(tarefa) {
  return `
        <li class="accordion__row">
                            <input class="accordion__input" id="row-1
                            " type="checkbox" />
                            <label for="row-1" class="accordion__label">
                                ${tarefa.TITULO}
                            </label>
                            <div class="accordion__content">
                                <p>${tarefa.DATACRIACAO}</p>
                                <p>${tarefa.DESCRICAO}</p>
                                <p>${tarefa.STATUS}<p>
                            </div>
                        </li>`;
}

module.exports = criaCardTarefas;
