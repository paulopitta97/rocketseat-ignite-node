## Anotações Gerais

- `pnpm i`
- `pnpm i eslint @rocketseat/eslint-config -D`
- `pnpm run start:dev`
- `pnpm run lint`
- `docker-compose up -d`
- `pnpm i prisma -D`
- `pnpm i @prisma/client`
- `pnpm prisma init`
- `pnpm prisma migrate dev`
- `pnpm prisma studio`
- `pnpm i bcryptjs`
- `pnpm i @types/bcryptjs`
- `pnpm i zod`
- `pnpm i zod-validation-error`
- `pnpm i @nestjs/config`
- `pnpm i @nestjs/passport @nestjs/jwt`

## Gerando Chave Privada e Pública RSA256
- `openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048`
- `openssl rsa -pubout -in private_key.pem -out public_key.pem`

### Convertendo para base64 no GitBash
- `base64 -w 0 private_key.pem > private_key.b64.txt`
- `base64 -w 0 public_key.pem > public_key.b64.txt`

- `wsl --shutdown`

- `pnpm i passport-jwt`
- `pnpm i @types/passport-jwt -D`

## Configuração Testes
- `pnpm i vitest unplugin-swc @swc/core @vitest/coverage-v8 -D`
- `pnpm i vite-tsconfig-paths -D`
- `pnpm i dotenv -D` - pois o `setup-e2e.ts` somente é usado no Vitest/Testes.
- `pnpm i supertest -D`
- `pnpm i @types/supertest -D`

## Dominio
- `pnpm tsc --noEmit`
- `pnpm i -D @faker-js/faker`
- `pnpm i dayjs`
- `pnpm lint`
- `pnpm run test`
- `pnpm add vite-tsconfig-paths@4.2.1 -D` -> Downgrade do `vite-tsconfig-paths` para versão compatível com CommonJS
- `pnpm prisma migrate dev`

- `pnpm i @types/multer -D`
- `pnpm i @aws-sdk/client-s3`
- `pnpm i ioredis`

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```