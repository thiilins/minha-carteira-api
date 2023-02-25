import { Router } from 'express'

import MainController from '../controller/MainController'

const router = Router()

router.get('/', MainController.index)

export default router
