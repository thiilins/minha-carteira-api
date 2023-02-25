import express, { Router } from 'express'

import mainRoutes from './main.routes'

const app = express()
const router = Router()

router.use('/', mainRoutes)

app.use(router)

export default app
