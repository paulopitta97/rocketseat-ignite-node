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

## TOPICO 3 - 
- ``
- ``
- ``