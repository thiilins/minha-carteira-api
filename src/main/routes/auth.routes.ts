import { Router } from 'express'

import { ForgotPassword, Login } from '../controller/auth.controller'

const router = Router()

router.post('/login', Login)
router.get('/forgot-password', ForgotPassword)

export default router
