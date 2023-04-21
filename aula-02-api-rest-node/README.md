// https://app.rocketseat.com.br/h/forum/node-js/c3010c60-1232-4a21-9d1e-625f5a829246

npm run knex -- migrate:make create-transactions

npm run knex -- migrate:latest

npm run knex -- migrate:rollback

### Requisitos Funcionais(RF)
- O usuário deve poder criar uma conta;
- O usuário deve poder obter um extrato da sua conta;
- O usuário deve poder listar todas transações que já ocorreram;
- O usuário deve poder visualizar uma transação única;

### Regras de Negócios(RN)
- A transação pode do tipo crédito que somará ao valor total, ou débito que será subtraído;
- Deve ser possível identificar o usuário entre as requisições;
- O usuário só pode visualizar transações que ele criou;

### Regras Não Funcionais(RNF)
- Será criado ao longo da aplicação;

### Hospedagem

- render.com
- fly.io
- railway.app