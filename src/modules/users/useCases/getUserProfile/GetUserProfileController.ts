import { Request, Response } from 'express'

import { GetUserProfileUseCase } from './GetUserProfileUseCase'
export class GetUserProfileController {
  async handle(req: Request, res: Response) {
    const { id } = req.user!

    const getUserByIdUseCase = new GetUserProfileUseCase()

    const result = await getUserByIdUseCase.execute({
      id: id!,
    })

    if (result.success && result.data) {
      const { password, ...user } = result.data
      return res.status(200).json(user)
    }
    return res.status(result.error!).json(result.message)
  }
}
