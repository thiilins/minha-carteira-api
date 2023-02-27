import { AuthController } from '@modules/auth/auth.controller'
import { Router } from 'express'

const router = Router()
const { forgoPassword, login } = new AuthController()

router.get('/login', login)
router.get('/forgot-password', forgoPassword)

export default router
