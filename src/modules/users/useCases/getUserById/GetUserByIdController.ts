import { Request, Response } from 'express'

import { GetUserByIdUseCase } from './GetUserByIdUseCase'
export class GetUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const getUserByIdUseCase = new GetUserByIdUseCase()

    const result = await getUserByIdUseCase.execute({
      id,
    })

    if (result.success && result.data) {
      const user = result.data.map(item => {
        const { password, ...user } = item
        return user
      })
      return res.status(200).json(user)
    }
    return res.status(result.error!).json(result.message)
  }
}
