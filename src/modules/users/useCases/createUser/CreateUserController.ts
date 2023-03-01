import crypto from '@/helpers/crypto'
import { Request, Response } from 'express'

import { CreateUserUseCase } from './CreateUserUseCase'
export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, telefone, admin, avatar } = req.body
    const cryptPass = crypto.create(password)
    const createUserUseCase = new CreateUserUseCase()
    const result = await createUserUseCase.execute({
      name,
      email,
      password: cryptPass,
      telefone,
      admin,
      avatar,
    })
    return result.success
      ? res.status(201).json(result.data)
      : res.status(result.error!).json(result.message)
  }
}
