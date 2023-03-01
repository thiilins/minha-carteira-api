import crypto from '@/helpers/crypto'
import { Request, Response } from 'express'

import { ForgotPasswordUseCase } from './useCases/ForgotPasswordUseCase'

export class AuthController {
  async forgoPassword(req: Request, res: Response) {
    const { email } = req.body
    const forgotPasswordUseCase = new ForgotPasswordUseCase()

    const result = await forgotPasswordUseCase.execute({ email })

    return res.status(201).json(result)
  }
}
