import express from 'express'
import { getIndex, getDetalhes, getCadastro, postCadastro, getUpdate, postUpdate, getRemove} from '../controller/controller.js'

export const routers = express.Router()

routers.get('/', getIndex)
routers.get('/detalhes/:id', getDetalhes)
routers.get('/remove/:id',getRemove)

routers.get('/cadastro', getCadastro)
routers.post('/cadastro', postCadastro)

routers.get('/update/:id', getUpdate)
routers.post('/update/:id', postUpdate)