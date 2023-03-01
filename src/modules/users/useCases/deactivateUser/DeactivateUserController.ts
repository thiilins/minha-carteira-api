import { Request, Response } from 'express'

import { DeactivateUserUseCase } from './DeactivateUserUseCase'
export class DeactivateUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const deactivateUserUseCase = new DeactivateUserUseCase()

    const result = await deactivateUserUseCase.execute({
      id,
    })

    if (result.success && result.data) {
      const { enable } = result.data
      return res.status(200).json({ status: enable })
    }
    return res.status(result.error!).json(result.message)
  }
}
