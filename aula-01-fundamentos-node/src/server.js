// const http = require('http')
// CommonJS => Require
// ESModules => import/export

import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';
import { extractQueryParam } from './utils/extract-query-params.js';

// Stateful X Stateless
// const users = [];

// Query Parameters: URL Stateful => filtros, paginação, não-obrigatórios
    // Exemplo: GET http://localhost:3333/users?userId=1&name=Paulo
// Route Parameters: Identificação de recurso
    // Exemplo: GET/DELETE http://localhost:3333/users/1
    // o 1 representa o ID do Recurso....
// Request Body: Envio de informações de um formulário (HTTPs) / BODY
    // Exemplo: POST http://localhost:3333/users

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res); // middleware

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if( route ) {
        const routeParams = req.url.match(route.path)

        const { query, ...params } = routeParams.groups

        req.params = params
        req.query = query ? extractQueryParam(query) : {}

        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3333);