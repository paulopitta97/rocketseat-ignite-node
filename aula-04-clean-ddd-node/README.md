# 🧼 Clean DDD API – Node.js com Domain-Driven Design

Este projeto é uma aplicação de estudo sobre **Clean Architecture** e **Domain-Driven Design (DDD)** com **Node.js + TypeScript**, onde a proposta é estruturar uma API com forte separação de responsabilidades, usando princípios de arquitetura limpa, camadas independentes e regras de negócio centralizadas.

---

## ✅ Funcionalidades

A aplicação serve como base para projetos que precisam de:

- Estruturação em camadas seguindo DDD (Domain, Application, Infra)
- Regras de negócio desacopladas de infraestrutura
- Repositórios e entidades bem definidos
- Camada de comunicação HTTP com rotas organizadas

---

## 🧰 Tecnologias Utilizadas

- **Node.js** com **TypeScript**
- **Vitest** para testes
- **Arquitetura Clean + DDD**
- **In-Memory Database** para simulação de persistência

---

## ▶️ Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/paulopitta97/rocketseat-ignite-node.git
cd rocketseat-ignite-node/aula-04-clean-ddd-node
```

2. Instale as dependências:

```bash
npm install
```

3. Rodando os Testes:

```bash
npm run test
```

### Comandos

- `npm init -y`
- `npm i typescript @types/node -D`
- `npx tsc --init` // target mudar para es2020
- `npm i vitest -D`
- `npx vitest run`
- `npm i dayjs`
- `npm i vite-tsconfig-paths -D`

- [Glossário: DDD](https://efficient-sloth-d85.notion.site/Gloss-rio-DDD-3a81b4df36d348a299ccbc53f38a1665)

- `npm i eslint @rocketseat/eslint-config -D`
- `npm i eslint-plugin-vitest-globals -D`
- `npm i @faker-js/faker -D`

### Anotações

- Prefixos
    - GET quando quiser retornar um único objeto/dado
    - FETCH quando quiser retornar uma lista

- Conceitos
    - LEFT (failure) = quando o fluxo volta pra esquerda
    - RIGHT (success) = quando o fluxo continua pra direita

- Conceitos Patterns

- AggregateRoot / Aggregate
    - Exemplo: 
        - Order -> OrderItem[]
        - Order -> Shipping
    - é interessante não criar vários Repositórios para persistir os Agregados.
    - no caso, o Agregado Root ele deve lidar também automaticamente em persistir todos os subagregados.
- WatchedList
    - Exemplo: 
        - Question -> Attachment[]
    - Faz mais sentido na edição, pois teria que:
        - Adicionar um novo anexo
        - Remover o segundo anexo que tinha sido criado previamente
        - Editar um anexo existente
    - Acaba sendo bem ruim a prática de deletar esses registros e inseri-los novamente.
    - Ideal é identificar quais foram adicionados, quais foram removidos, quais foram editados.
    - É um pattern que permite identificar a operação a fazer.


- `npx tsc --noEmit` -> para ver erros TS

- Subdomínios

    - `Core`: o que dá dinheiro
        - Exemplo: Compra, Catálogo, Pagamento, Entrega, Faturamento (NFE)
    - `Supporting`: dá suporte para o core funcionar
        - Exemplo: Estoque
    - `Generic`: necessários, porém menos importantes
        - Exemplo: Notificação ao cliente, Chat