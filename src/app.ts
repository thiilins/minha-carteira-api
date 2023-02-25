import path from 'path'

import express, { Express } from 'express'
import logger from 'morgan'
import swaggerUI from 'swagger-ui-express'

import routes from '@/app/routes'
import swaggerFile from '@/swagger.json'

/*
 * Habilitando e Adicionando Middlewares
 */

const app: Express = express()
app.use(logger('dev')) // Habilitando o Log via console
app.use(express.static(path.resolve('src', 'public'))) // Definindo a Pasta Public
app.use(express.json()) //Habilitando JSON  e configurando recebimento de formulário
app.use(express.urlencoded({ extended: false }))
// Habilitando methodOverride

/**
 *Instanciando Rotas
 */
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use('/', routes)

export default app
