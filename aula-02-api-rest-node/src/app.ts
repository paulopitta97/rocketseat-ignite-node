// Runtime Type Checking = durante execução
// Static Type Checking = durante implementação
// type ou interface

import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})