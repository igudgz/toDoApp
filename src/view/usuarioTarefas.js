const criaCardTarefas = require('./cardTarefas');

function usuarioTarefas(result) {
  let cardTarefas = '';
  result.forEach((tarefas) => (cardTarefas += criaCardTarefas(tarefas)));

  return `<!DOCTYPE html>


<head>
    <title>To do </title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body class="">
    <header class="d-flex justify-content-center mt-1">
        <h1 class="text-light align-self-center">
            To do
        </h1>
    </header>
    <main>
        <div class="container div-login">
            <div class="d-flex justify-content-center h-100 ">
                <div class="accordion__container">
                    <ul class="accordion">
                      ${cardTarefas}
                    </ul>
                </div>
        </div>
        
    </main>
   
</body>

</html>`;
}

module.exports = usuarioTarefas;
