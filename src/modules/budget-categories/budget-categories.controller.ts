import { Request, Response } from 'express'

import { ChangingBudgetCategoryUseCase } from './useCases/ChangingBudgetCategoryUseCase'
import { CreateBudgetCategoryUseCase } from './useCases/CreateBudgetCategoryUseCase'
import { DeleteBudgetCategoryUseCase } from './useCases/DeleteBudgetCategoryUseCase'
import { GetAllBudgetCategoryUseCase } from './useCases/GetAllBudgetCategoryUseCase'
import { GetBudgetCategoryByIdUseCase } from './useCases/GetBudgetCategoryByIdUseCase'

export class BudgetCategoriesController {
  async list(req: Request, res: Response) {
    const getAllBudgetCategoryUseCase = new GetAllBudgetCategoryUseCase()

    const result = await getAllBudgetCategoryUseCase.execute()

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
  async listById(req: Request, res: Response) {
    const { id } = req.params

    const getBudgetCategoryByIDUseCase = new GetBudgetCategoryByIdUseCase()

    const result = await getBudgetCategoryByIDUseCase.execute({
      id,
    })

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
  async create(req: Request, res: Response) {
    const { budget, month, user_id, budget_id, category_id } = req.body

    const createBudgetCategoryUseCase = new CreateBudgetCategoryUseCase()

    const result = await createBudgetCategoryUseCase.execute({
      budget,
      month,
      user_id,
      budget_id,
      category_id,
    })

    return result.success
      ? res.status(201).json(result.data)
      : res.status(result.error!).json(result.message)
  }
  async update(req: Request, res: Response) {
    const { budget, month, user_id, budget_id, category_id } = req.body
    const { id } = req.params

    const changingBudgetCategoryUseCase = new ChangingBudgetCategoryUseCase()

    const result = await changingBudgetCategoryUseCase.execute({
      budget,
      id,
      month,
      user_id,
      budget_id,
      category_id,
    })

    return result.success
      ? res.status(201).json(result.data)
      : res.status(result.error!).json(result.message)
  }

  async del(req: Request, res: Response) {
    const { id } = req.params
    const deleteBudgetCategoryUseCase = new DeleteBudgetCategoryUseCase()

    const result = await deleteBudgetCategoryUseCase.execute({
      id,
    })

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
}
