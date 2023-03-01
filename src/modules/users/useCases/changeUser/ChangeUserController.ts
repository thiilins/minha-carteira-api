import crypto from '@/helpers/crypto'
import { Request, Response } from 'express'

import { ChangeUserUseCase } from './ChangeUserUseCase'

export class ChangeUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, telefone, admin, avatar } = req.body
    const { id } = req.params
    const { id: user_id, is_admin } = req.user!
    if (!is_admin && user_id !== id) {
      return res.status(401).json('Unauthorized access!')
    }
    const cryptPass = crypto.create(password)
    const changeUserUseCase = new ChangeUserUseCase()

    const result = await changeUserUseCase.execute({
      id,
      name,
      email,
      password: cryptPass,
      telefone,
      admin: is_admin ? admin : false,
      avatar,
    })
    if (result.success && result.data) {
      const { password, ...user } = result.data
      res.status(200).json(user)
    }
    return res.status(result.error!).json(result.message)
  }
}
