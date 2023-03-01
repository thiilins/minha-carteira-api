import { Request, Response } from 'express'

import { GetUserByIdUseCase } from './GetUserByIdUseCase'
export class GetUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const getUserByIdUseCase = new GetUserByIdUseCase()

    const result = await getUserByIdUseCase.execute({
      id,
    })

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
}
