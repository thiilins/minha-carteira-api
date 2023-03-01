import { Request, Response } from 'express'

import { DeactivateUserUseCase } from './DeactivateUserUseCase'
export class DeactivateUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const deactivateUserUseCase = new DeactivateUserUseCase()

    const result = await deactivateUserUseCase.execute({
      id,
    })

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
}
