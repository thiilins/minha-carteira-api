import { Request, Response } from 'express'

import { DeleteUserUseCase } from './DeleteUserUseCase'
export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const deleteUserUseCase = new DeleteUserUseCase()

    const result = await deleteUserUseCase.execute({
      id,
    })
    if (result.success && result.data) {
      return res.status(204).send()
    }
    return res.status(result.error!).json(result.message)
  }
}
