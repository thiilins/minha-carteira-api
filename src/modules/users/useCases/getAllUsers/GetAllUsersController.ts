import { Request, Response } from 'express'

import { GetAllUsersUseCase } from './GetAllUsersUseCase'
export class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const getAllUserUseCase = new GetAllUsersUseCase()

    const result = await getAllUserUseCase.execute()

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
}
