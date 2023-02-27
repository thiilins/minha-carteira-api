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

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
  async listById(req: Request, res: Response) {
    const { id } = req.params

    const getSavingByIdUseCase = new GetSavingByIdUseCase()

    const result = await getSavingByIdUseCase.execute({
      id,
    })

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
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

    return result.success
      ? res.status(201).json(result.data)
      : res.status(result.error!).json(result.message)
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
    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }

  async del(req: Request, res: Response) {
    const { id } = req.params
    const deleteSavingUseCase = new DeleteSavingUseCase()
    const result = await deleteSavingUseCase.execute({
      id,
    })
    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
}
