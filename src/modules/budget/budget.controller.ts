import { Request, Response } from 'express'

import { ChangingBudgetUseCase } from './useCases/ChangingBudgetUseCase'
import { CreateBudgetUseCase } from './useCases/CreateBudgetUseCase'
import { DeleteBudgetUseCase } from './useCases/DeleteBudgetUseCase'
import { GetAllBudgetUseCase } from './useCases/GetAllBudgetUseCase'
import { GetBudgetByIDUseCase } from './useCases/GetBudgetByIDUseCase'

export class BudgetController {
  async list(req: Request, res: Response) {
    const getAllBudgetUseCase = new GetAllBudgetUseCase()
    const result = await getAllBudgetUseCase.execute()
    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
  async listById(req: Request, res: Response) {
    const { id } = req.params
    const getBudgetByIDUseCase = new GetBudgetByIDUseCase()
    const result = await getBudgetByIDUseCase.execute({
      id,
    })
    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
  async create(req: Request, res: Response) {
    const { budget, month, user_id } = req.body
    const { id } = req.params
    const changingBudgetUseCase = new ChangingBudgetUseCase()
    const result = await changingBudgetUseCase.execute({
      budget,
      id,
      month,
      user_id,
    })
    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
  async update(req: Request, res: Response) {
    const { budget, month, user_id } = req.body
    const createBudgetUseCase = new CreateBudgetUseCase()

    const result = await createBudgetUseCase.execute({
      budget,
      month,
      user_id,
    })
    return res.status(result.error ?? 201).json(result.message ?? result.data)
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params
    const deleteBudgetUseCase = new DeleteBudgetUseCase()
    const result = await deleteBudgetUseCase.execute({
      id,
    })
    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
}
