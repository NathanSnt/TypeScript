// npm install express
// npm install @types/express
console.clear()

import express from "express"
import {Server} from "http"

const server = express()
// gerando o servidor na porta 8080
server.listen(8080)

// ROTAS ESTÁTICAS
server.get("/", (req, res) =>{
    res.send("<h1>Olá, mundo!</h1><script>alert('OLÁ');alert('MUNDO')</script>")
})

server.get("/sobre_nos", (req, res) =>{
    res.send("<h1 style='text-align: center; font-size: 100px; color:red;'>SOBRE NÓS</h1><script>alert('Funcionou!')</script>")
})

// ROTAS DINÂMICAS
server.get("/noticias/:titulo", (req, res) =>{
    let titulo:string = req.params.titulo
    res.send(`Notícia: ${titulo}`)
})

server.get("/voos/:origem-:destino", (req, res) =>{
    let {origem , destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}.`)
})

console.log("Servidor esta ativo!")
