import { LoginController } from '@/modules/auth/useCases/login/LoginController'
import { AuthController } from '@modules/auth/auth.controller'
import { Router } from 'express'

const loginController = new LoginController()

const router = Router()
const { forgoPassword } = new AuthController()
router.get('/login', loginController.handle)
router.get('/forgot-password', forgoPassword)

export default router
