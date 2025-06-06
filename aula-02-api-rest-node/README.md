# 🏦 Aula 02 – API REST de Transações

Este projeto foi desenvolvido como parte da trilha Ignite da Rocketseat e tem como objetivo a construção de uma **API REST de transações financeiras**, utilizando **Node.js com Fastify** e outras ferramentas modernas do ecossistema JavaScript.

## ✅ Funcionalidades

- 📥 Criar uma nova transação (`crédito` ou `débito`)
- 📄 Listar todas as transações da conta
- 🔍 Buscar uma transação por ID
- 📊 Obter o resumo (total disponível)

As transações são associadas à sessão do usuário (via cookie), e os dados são persistidos em um banco PostgreSQL.

---

## 🧰 Tecnologias e Ferramentas

- **[Fastify](https://fastify.io/)** – Framework leve e rápido para criação de APIs
- **[Knex.js](https://knexjs.org/)** – Query builder SQL para Node.js
- **[PostgreSQL](https://www.postgresql.org/)** – Banco de dados relacional utilizado
- **[Zod](https://zod.dev/)** – Validação de dados com TypeScript
- **[Vitest](https://vitest.dev/)** – Testes unitários e de integração
- **[Supertest](https://github.com/ladjs/supertest)** – Testes HTTP end-to-end

---

## ▶️ Setup

1. Clone o repositório:

```bash
git clone https://github.com/paulopitta97/rocketseat-ignite-node.git
cd rocketseat-ignite-node/aula-02-api-rest-node
```

2. Instale as dependências:

```bash
npm install
```

3. Execute as migrations:

```bash
npx knex migrate:latest
```

4. Inicie o servidor:

```bash
npm run dev
```

---

## 📮 Rotas disponíveis

- `POST /transactions` – Criar uma nova transação
- `GET /transactions` – Listar todas as transações da sessão atual
- `GET /transactions/:id` – Buscar uma transação específica
- `GET /transactions/summary` – Obter o resumo da conta (somatório)

---

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

### Anotações Úteis

- https://app.rocketseat.com.br/h/forum/node-js/c3010c60-1232-4a21-9d1e-625f5a829246

```
npm run knex -- migrate:make create-transactions
npm run knex -- migrate:latest
npm run knex -- migrate:rollback
```