// npm install express
// npm install @types/express
console.clear()

import express from 'express'
import {Server} from 'http'
import mainRoutes from './routes/index' // Importando as rotas
import path from 'path'
import mustache from 'mustache-express'

const port:number = 8080
const server = express()

server.set('view engine', 'mustache')
server.engine('mustache', mustache())

// Usando as rotas
server.use(mainRoutes)

// Criando uma rota para a pasta public
server.use(express.static(path.join(__dirname, '../public')))
// server.use(express.static('./')) rota para a pasta raiz do projeto (manter comentada.)

// Criando rotas para a views
server.set('views', path.join(__dirname, 'views'))

// Criando rota para página não encontrada
server.use((req, res) =>{
    res.status(404).send('Página não encontrada.')
})

// Gerando o servidor na porta 8080
server.listen(port)
console.log(`Servidor está rodando em: localhost:${port}`)