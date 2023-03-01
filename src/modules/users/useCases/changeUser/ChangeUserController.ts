import crypto from '@/helpers/crypto'
import { Request, Response } from 'express'

import { ChangeUserUseCase } from './ChangeUserUseCase'

export class ChangeUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, telefone, admin, avatar } = req.body
    const { id } = req.params
    const cryptPass = crypto.create(password)
    const changeUserUseCase = new ChangeUserUseCase()

    const result = await changeUserUseCase.execute({
      id,
      name,
      email,
      password: cryptPass,
      telefone,
      admin,
      avatar,
    })
    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
}
