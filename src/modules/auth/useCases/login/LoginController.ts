import crypto from '@/helpers/crypto'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { LoginUseCase } from './LoginUseCase'
export class LoginController {
  async handle(req: Request, res: Response) {
    const getAllUserUseCase = new LoginUseCase()
    const { email, password } = req.body
    const result = await getAllUserUseCase.execute({ email, password })
    const verifyPass = result.data
      ? crypto.validate(password, result.data.password)
      : false

    if (result.success && !verifyPass) {
      return res.status(401).json('Unauthorized Access!')
    }
    if (result.data) {
      const { password, ...user } = result.data

      const token = jwt.sign(
        {
          id: result.data?.id,
          email: result.data?.email,
          admin: result.data?.admin,
        },
        process.env.JWT_SECRET as any,
        {
          expiresIn: process.env.JWT_EXPIRE,
        }
      )

      return res.status(201).json({ user, token })
    }
    return res.status(400).send()
  }
}
