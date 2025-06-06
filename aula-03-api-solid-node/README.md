# 💪 GymPass Style API – Ignite Node.js

Este projeto é uma API RESTful inspirada no modelo de funcionamento do GymPass. Ele permite que usuários se cadastrem, busquem academias próximas, realizem check-ins presenciais e acompanhem seu histórico — tudo com foco em arquitetura limpa e boas práticas com os princípios do SOLID.

Desenvolvido durante a trilha **Ignite Node.js** da Rocketseat.

GymPass style app.

---

## ✅ Funcionalidades

- 👤 Cadastro e autenticação de usuários com JWT
- 🔒 Proteção de rotas com autenticação
- 🏋️‍♂️ Cadastro e listagem de academias (gyms)
- 📍 Busca de academias próximas com base na localização
- 📅 Realização de check-ins em academias
- 📜 Validação de check-ins por administradores
- 🕓 Histórico de check-ins do usuário
- 🧪 Testes automatizados (unitários e e2e)

---

## 📚 Regras de Negócio

- 🔁 Um usuário **não pode fazer dois check-ins na mesma academia no mesmo dia**
- 📍 O check-in **só pode ocorrer se a academia estiver até 100 metros de distância**
- ⏱️ Um check-in **só pode ser validado em até 20 minutos**
- 👮 Apenas **administradores** podem cadastrar academias e validar check-ins
- 🔐 **Senhas são criptografadas**
- 🧾 As listagens são paginadas (20 por página)

---

## 🧰 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **Fastify** – Framework web rápido e leve
- **Prisma ORM** – ORM moderno com suporte a migrations
- **PostgreSQL** – Banco de dados relacional
- **Zod** – Validação e tipagem de dados
- **Vitest** – Framework de testes (unitários e e2e)
- **Supertest** – Testes HTTP para endpoints REST

---

## ▶️ Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/paulopitta97/rocketseat-ignite-node.git
cd rocketseat-ignite-node/aula-03-api-solid-node
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env`:

- Crie um .env com base no .env.example e preencha com sua configuração:

4. Suba o container do banco PostgreSQL com Docker:

```bash
docker-compose up -d
```

5. Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```

6. Inicie o servidor:

```bash
npm run dev
```

- A API estará disponível em http://localhost:3333

## 🔐 Rotas Principais

- `POST /users` – Criar novo usuário
- `POST /sessions` – Login
- `GET /me` – Perfil do usuário logado
- `POST /gyms` – Cadastrar nova academia
- `GET /gyms/search` – Buscar academias por nome
- `GET /gyms/nearby` – Buscar academias próximas
- `POST /gyms/:gymId/check-ins` – Fazer check-in
- `GET /check-ins/history` – Histórico de check-ins
- `PATCH /check-ins/:checkInId/validate` – Validar check-in (admin)

## 📌 Observações

- Projeto modular e escalável, com separação clara entre domínio, casos de uso e infraestrutura
- Foco em princípios de arquitetura limpa e testes desde o início
- Ideal como base para sistemas com regras de negócio mais robustas

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);