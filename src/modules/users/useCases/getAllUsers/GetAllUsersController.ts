import { Request, Response } from 'express'

import { GetAllUsersUseCase } from './GetAllUsersUseCase'
export class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const getAllUserUseCase = new GetAllUsersUseCase()
    const { email } = req.user!
    const result = await getAllUserUseCase.execute()
    if (result.success && result.data) {
      const users = result.data.map(item => {
        const { password, ...user } = item
        return user
      })
      return res.status(200).json(users)
    }
    return res.status(result.error!).json(result.message)
  }
}
