import { on } from "events"
import {Router, Request, Response} from "express"

const router: Router = Router()


// ROTAS ESTÁTICAS
router.get("/", (req: Request, res: Response) =>{
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

// rota para página de idade
router.get('/idade', (req: Request, res: Response) =>{
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

// Rotas contatos (Desafio)
router.get('/contato', (req: Request, res: Response) =>{
    res.render('pages/contato')
})

router.get("/sobre_nos", (req: Request, res: Response) =>{
    res.send("<h1 style='text-align: center; font-family: roboto; font-size: 100px; color:red;'>SOBRE NÓS</h1><script>alert('Funcionou!')</script>")
})

// ROTAS DINÂMICAS
router.get("/noticias/:titulo", (req: Request, res: Response) =>{
    let titulo:string = req.params.titulo
    res.send(`Notícia: ${titulo}`)
})

router.get("/voos/:origem-:destino", (req: Request, res: Response) =>{
    let {origem , destino} = req.params
    res.send(`Procurando voos de <strong>${origem}</strong> até <strong>${destino}</strong>.`)
})

export default router