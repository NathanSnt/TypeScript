import {Router, Request, Response} from "express"
import * as homeController from '../controllers/homeController'
import * as userController from '../controllers/userController'

const router: Router = Router()


// ROTAS ESTÁTICAS
router.get("/", homeController.home)

// rota para página de idade
router.get('/idade', userController.idade)

// Receber ano de nascimento em formulário e calcular a idade
router.get('/nascimento', userController.nascimentoGet)

router.post('/nascimento', userController.nascimentoPost)

// Receber conteúdos de formulários
router.get('/nome', userController.nome)

// Receber conteúdos de formulários (desafio)
router.get('/formulario', userController.formulario)

// Rotas contatos (Desafio)
router.get('/contato', userController.contato)

router.get("/sobre_nos", userController.sobreNos)

// ROTAS DINÂMICAS
router.get("/noticias/:titulo", userController.noticias)

router.get("/voos/:origem-:destino", userController.voos)

export default router