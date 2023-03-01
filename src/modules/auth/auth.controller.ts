import crypto from '@/helpers/crypto'
import { Request, Response } from 'express'

import { ForgotPasswordUseCase } from './useCases/ForgotPasswordUseCase'
import { LoginUseCase } from './useCases/LoginUseCase'

export class AuthController {
  async login(req: Request, res: Response) {
    const getAllUserUseCase = new LoginUseCase()
    const { email, password } = req.body
    const result = await getAllUserUseCase.execute({ email, password })
    const verifyPass = result.success
      ? crypto.validate(password, result.data!.password)
      : 'error'
    return res.status(201).json(verifyPass)
  }

  async forgoPassword(req: Request, res: Response) {
    const { email } = req.body
    const forgotPasswordUseCase = new ForgotPasswordUseCase()

    const result = await forgotPasswordUseCase.execute({ email })

    return res.status(201).json(result)
  }
}
