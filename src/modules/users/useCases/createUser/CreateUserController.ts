import crypto from '@/helpers/crypto'
import { Request, Response } from 'express'

import { CreateUserUseCase } from './CreateUserUseCase'
export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, telefone, admin, avatar } = req.body
    const is_admin = req.user?.is_admin ?? false
    const cryptPass = crypto.create(password)
    const createUserUseCase = new CreateUserUseCase()
    const result = await createUserUseCase.execute({
      name,
      email,
      password: cryptPass,
      telefone,
      admin: is_admin ? admin : false,
      avatar,
    })
    if (result.success && result.data) {
      const { password, ...user } = result.data
      res.status(201).json(user)
    }
    return res.status(result.error!).json(result.message)
  }
}
