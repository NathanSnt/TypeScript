import { Request, Response } from "express"
import { request } from "http"

export const idade = ((req:Request, res:Response) =>{
    let idade: number = 20
    let maior18: boolean = false

    if (idade >= 18){
        maior18 = true
    }
    res.render('pages/idade', {
        maior18,
        nome: 'Nathan',
        // produtos: [
        //     'Mouse',
        //     'Leite em Pó',
        //     'Desodorante',
        //     'Lustra Imóveis',
        //     'Sabão em Pó'
        // ]
    })
})

export const nome = ((req:Request, res:Response) => {
    let nome: string = req.query.nome as string

    res.render('pages/nome', {
        nome
    })
})

export const formulario = ((req:Request, res:Response) => {
    let nome: string = req.query.nome as string
    let idade: number = req.query.idade as unknown as number
    let telefone: string = req.query.telefone as string
    let endereco: string = req.query.endereco as string
    let valido: boolean = false

    if (nome && idade && telefone && endereco){
        valido = true
    }

    res.render('pages/formulario', {
        nome, 
        idade,
        telefone,
        endereco,
        valido
    })
})

export const contato = ((req:Request, res:Response) =>{
    res.render('pages/contato')
})

export const nascimentoGet = ((req:Request, res:Response) => {
    res.render('pages/nascimento')
})

export const nascimentoPost = ((req:Request, res:Response) => {
    let ano_nascimento: number = req.body.ano_nascimento as unknown as number
    let idade: number = 2023 - ano_nascimento
    if (idade == 2023){
        idade = 0
    }
    res.render('pages/nascimento', {
        idade
    })
})

export const sobreNos = ((req:Request, res:Response) => {
    res.send("<h1 style='text-align: center; font-family: roboto; font-size: 100px; color:red;'>SOBRE NÓS</h1><script>alert('Funcionou!')</script>")
})

export const noticias = ((req:Request, res:Response) => {
    let titulo:string = req.params.titulo
    res.send(`Notícia: ${titulo}`)
})

export const voos = ((req:Request, res:Response) => {
    let {origem , destino} = req.params
    res.send(`Procurando voos de <strong>${origem}</strong> até <strong>${destino}</strong>.`)
})