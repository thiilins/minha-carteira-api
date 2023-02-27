import { Request, Response } from 'express'

import { ChangingEntryUseCase } from './useCases/ChangingEntryUseCase'
import { CreateEntryUseCase } from './useCases/CreateEntryUseCase'
import { DeleteEntryUseCase } from './useCases/DeleteEntryUseCase'
import { GetAllEntryUseCase } from './useCases/GetAllEntryUseCase'
import { GetEntryByIdUseCase } from './useCases/GetEntryByIdUseCase'

export class CreateUserController {
  async list(req: Request, res: Response) {
    const getAllEntryUseCase = new GetAllEntryUseCase()

    const result = await getAllEntryUseCase.execute()

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
  async listById(req: Request, res: Response) {
    const { id } = req.params

    const getEntryByIDUseCase = new GetEntryByIdUseCase()

    const result = await getEntryByIDUseCase.execute({
      id,
    })

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
  async create(req: Request, res: Response) {
    const {
      amount,
      category_id,
      date,
      title,
      user_id,
      recurrent,
      recurrent_number,
    } = req.body

    const createEntryUseCase = new CreateEntryUseCase()

    const result = await createEntryUseCase.execute({
      amount,
      category_id,
      date,
      title,
      user_id,
      recurrent,
      recurrent_number,
    })

    return res.status(result.error ?? 201).json(result.message ?? result.data)
  }
  async update(req: Request, res: Response) {
    const {
      amount,
      category_id,
      date,
      title,
      user_id,
      recurrent,
      recurrent_number,
    } = req.body
    const { id } = req.params

    const changingEntryUseCase = new ChangingEntryUseCase()

    const result = await changingEntryUseCase.execute({
      id,
      amount,
      category_id,
      date,
      title,
      user_id,
      recurrent,
      recurrent_number,
    })

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const deleteEntryUseCase = new DeleteEntryUseCase()

    const result = await deleteEntryUseCase.execute({
      id,
    })

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
}
