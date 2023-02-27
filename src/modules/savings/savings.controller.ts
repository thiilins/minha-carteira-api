import { Request, Response } from 'express'

import { ChangeSavingUseCase } from './useCases/ChangeSavingUseCase'
import { CreateSavingUseCase } from './useCases/CreateSavingUseCase'
import { DeleteSavingUseCase } from './useCases/DeleteSavingUseCase'
import { GetAllSavingsUseCase } from './useCases/GetAllSavingsUseCase'
import { GetSavingByIdUseCase } from './useCases/GetSavingByIdUseCase'

export class SavingsController {
  async list(req: Request, res: Response) {
    const getAllSavingsUseCase = new GetAllSavingsUseCase()

    const result = await getAllSavingsUseCase.execute()

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
  async listById(req: Request, res: Response) {
    const { id } = req.params

    const getSavingByIdUseCase = new GetSavingByIdUseCase()

    const result = await getSavingByIdUseCase.execute({
      id,
    })

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
  async create(req: Request, res: Response) {
    const { goal, user_id, month, year } = req.body
    const createSavingUseCase = new CreateSavingUseCase()
    const result = await createSavingUseCase.execute({
      goal,
      user_id,
      month,
      year,
    })

    return res.status(result.error ?? 201).json(result.message ?? result.data)
  }
  async update(req: Request, res: Response) {
    const { goal, user_id, month, year } = req.body
    const { id } = req.params
    const changeSavingUseCase = new ChangeSavingUseCase()
    const result = await changeSavingUseCase.execute({
      id,
      goal,
      user_id,
      month,
      year,
    })
    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const deleteSavingUseCase = new DeleteSavingUseCase()
    const result = await deleteSavingUseCase.execute({
      id,
    })
    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
}
