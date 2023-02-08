import { Request, Response } from "express"

export const home = ((req:Request, res:Response) =>{
    // res.send("<h1>Olá, mundo!</h1>")
    // let pessoa = {
    //     nome : 'Nathan',
    //     idade : 22
    // }

    res.render('pages/home', {
        nome: 'Nathan',
        showWelcome: false
    })
})