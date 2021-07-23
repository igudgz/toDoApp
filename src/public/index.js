const divLogin = document.querySelector('.div-login');
const divCadastro = document.querySelector('.div-cadastro');
const btnCadastrar = document.querySelector('#btn-cadastrar');
const btnCadastro = document.querySelector('#botao-cadastro');
const btnLogin = document.querySelector('#btn-login');

btnCadastro.addEventListener('click', () => {
  divLogin.classList.add('ocultar');
  divCadastro.classList.remove('ocultar');
});

btnCadastrar.addEventListener('click', () => {
  divLogin.classList.remove('ocultar');
  divCadastro.classList.add('ocultar');
});
//Login
btnLogin.addEventListener('click', () => {
  const inputEmail = document.querySelector('#input-email');
  const inputSenha = document.querySelector('#input-senha');

  fetch(`http://localhost:3050/usuarios/${inputEmail.value}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((result) => {
      let idUsuario = result.result[0].ID;
      fetch(`http://localhost:3050/usuarios/tarefas/${idUsuario}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((result) => {
          document.documentElement.innerHTML = result;
        });
    });
});
