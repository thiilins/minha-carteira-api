import crypto from '@/helpers/crypto'
import { Request, Response } from 'express'

import { VerifyUserPasswordUseCase } from './VerifyUserPasswordUseCase'
export class VerifyUserPasswordController {
  async handle(req: Request, res: Response) {
    const verifyUserPasswordUseCase = new VerifyUserPasswordUseCase()
    const { password } = req.body
    const { id } = req.user!

    const result = await verifyUserPasswordUseCase.execute({ id: id! })
    const validatePassword = crypto.validate(password, result.data!.password)
    return res.status(201).json(validatePassword)
  }
}
