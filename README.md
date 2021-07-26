## To do app

Projeto criado para implementar um sistema de lista de tarefas com login utilizando uma API com padrão REST e com o sistema CRUD, com o sqlite foi feito o banco de dados com 2 entidades, USUÁRIOS e TAREFAS

### Instalacao

Para iniciar o sistema, clone o repositório git e no terminal digite o comando abaixo.

```
npm install 
```



Após a instalação, para executar o sistema digite :

`npm start` 

### Rotas 

Foram utilizadas rotas seguindo o padrão REST com os 4 verbos HTTP: GET, POST, PUT e DELETE requisitando informações das duas entidades

#### Tarefas

<p><b>GET</b>: '/tarefas'</p>
<p><b>GET</b>: '/tarefas/:id'</p>
<p><b>GET</b>: '/tarefas/usuarios/:idUser'</p>
<p><b>POST</b>: '/tarefas'</p>
<p><b>PUT</b>: '/tarefas/:id'</p>
<p><b>DELETE</b>: '/tarefas/:id'</p>

#### Usuários

<p><b>GET</b>: '/usuarios'</p>
<p><b>GET</b>: '/usuarios/email'</p>
<p><b>GET</b>: '/usuarios/tarefas/:idTask'</p>
<p><b>POST</b>: '/usuarios'</p>
<p><b>PUT</b>: '/usuarios/:email'</p>
<p><b>DELETE</b>: '/usuarios/:email'</p>