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
> GET quando quiser retornar um único objeto/dado
> FETCH quando quiser retornar uma lista

- Conceitos
> LEFT (failure) = quando o fluxo volta pra esquerda
> RIGHT (success) = quando o fluxo continua pra direita

- Conceitos Patterns
> AggregateRoot / Aggregate
    - Exemplo: 
        - Order -> OrderItem[]
        - Order -> Shipping
    - é interessante não criar vários Repositórios para persistir os Agregados.
    - no caso, o Agregado Root ele deve lidar também automaticamente em persistir todos os subagregados.
> WatchedList
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
- ``
- ``