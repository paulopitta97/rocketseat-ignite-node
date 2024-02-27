## TOPICO 1 - ESTRUTURA DO PROJETO

- `npm init -y`
- `npm i typescript @types/node tsx tsup -D`
- `npx tsc --init`
- `npm i fastify`
- `npm i dotenv`
- `npm i zod`
- `npm i eslint @rocketseat/eslint-config -D`

## TOPICO 2 - INTEGRAÇÃO COM PRISMA ORM

- `npm i prisma -D`
- `npx prisma init`
- `npx prisma generate`
- `npm i @prisma/client`

## TOPICO 2.1 - DOCKER

- `docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql:latest`
- // Obs: o "-p" indica redirecionamento de porta, no caso faz com que acesso o host 5432 irá acessar a porta 5432 dentro do container.
- `docker ps` -> para listar
- `docker ps - a` -> para listar
- `docker start api-solid-pg`
- `docker stop api-solid-pg`
- `docker rm api-solid-pg` -> para remover o container
- `docker logs api-solid-pg` -> para ver logs
- `docker logs api-solid-pg -f` -> para seguir os logs / mostrar logs novos
- `npx prisma migrate dev` -> para gerar migrations
- `npx prisma studio`

## TOPICO 2.1.1 - DOCKER (AUTOMATIZANDO)

- `docker compose up -d` -> (start) o "-d" indica que rodará em 'background'
- `docker compose stop` -> (stop only)
- `docker compose down` -> (stop and delete)
- ``

## TOPICO 2 - CONTINUAÇÃO

- `npx prisma migrate deploy` -> para rodar as migrations existentes em produção

## TOPICO 3 - CASO DE USO E DESIGN PATTERNS

- **SOLID**

- `S` — Single Responsiblity Principle (Princípio da responsabilidade única)
- `O` — Open-Closed Principle (Princípio Aberto-Fechado)
- `L` — Liskov Substitution Principle (Princípio da substituição de Liskov)
- `I` — Interface Segregation Principle (Princípio da Segregação da Interface)
- `D` — Dependency Inversion Principle (Princípio da inversão da dependência)

- **Password Hash**
- `npm i bcryptjs`
- `npm i @types/bcryptjs`

## TOPICO 4 - DESIGN PATTERNS & TESTES

- `npm i vitest vite-tsconfig-paths -D`
- `npm i @vitest/ui -D`

## TOPICO 5 - IMPLEMENTANDO CASOS DE USO

- SUT = System Under Test
- Factory Pattern = responsável pela criação e retorno da instância
- TDD
    - Em CRUD, geralmente fazemos o Teste depois mesmo.
    - Estado RED = erro
    - Estado GREEN = fazer funcionar
    - Estado REFACTOR = refatorar
- Mock de DATE no Vitest
    - `vi.useFakeTimers()` no `beforeEach`
- `npm i dayjs`

## TOPICO 6 - CONTROLLERS & TESTES E2E

- ``
- ``
- ``
- ``

## TOPICO 7 - REFRESH TOKEN & RBAC

- ``
- ``
- ``
- ``

## TOPICO 8 - CI/CD da aplicação

- ``
- ``
- ``
- ``