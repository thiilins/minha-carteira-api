import crypto from '@/helpers/crypto'
import { Request, Response } from 'express'

import { VerifyUserPasswordUseCase } from './VerifyUserPasswordUseCase'
export class VerifyUserPasswordController {
  async handle(req: Request, res: Response) {
    const verifyUserPasswordUseCase = new VerifyUserPasswordUseCase()
    const { id, password } = req.body
    const result = await verifyUserPasswordUseCase.execute({ id })
    const validatePassword = crypto.validate(password, result.data!.password)
    return res.status(201).json(validatePassword)
  }
}
