import { Request, Response } from 'express'

import { ChangingExpensesCategoryUseCase } from './useCases/ChangingExpensesCategoryUseCase'
import { CreateExpensesCategoryUseCase } from './useCases/CreateExpensesCategoryUseCase'
import { DeleteExpensesCategoryUseCase } from './useCases/DeleteExpensesCategoryUseCase'
import { GetAllExpensesCategoryUseCase } from './useCases/GetAllExpensesCategoryUseCase'
import { GetExpenseCategoryByIdUseCase } from './useCases/GetExpenseCategoryByIdUseCase'

export class ExpensesCategoriesController {
  async list(req: Request, res: Response) {
    const getAllExpensesCategoryUseCase = new GetAllExpensesCategoryUseCase()

    const result = await getAllExpensesCategoryUseCase.execute()

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
  async listById(req: Request, res: Response) {
    const { id } = req.params

    const getExpenseCategoryByIDUseCase = new GetExpenseCategoryByIdUseCase()

    const result = await getExpenseCategoryByIDUseCase.execute({
      id,
    })

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }

  async create(req: Request, res: Response) {
    const { icon, name, user_id } = req.body

    const createExpensesCategoryUseCase = new CreateExpensesCategoryUseCase()

    const result = await createExpensesCategoryUseCase.execute({
      icon,
      name,
      user_id,
    })

    return res.status(result.error ?? 201).json(result.message ?? result.data)
  }
  async update(req: Request, res: Response) {
    const { icon, name, user_id } = req.body
    const { id } = req.params

    const changingExpensesCategoryUseCase =
      new ChangingExpensesCategoryUseCase()

    const result = await changingExpensesCategoryUseCase.execute({
      icon,
      id,
      name,
      user_id,
    })

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params
    const deleteExpensesCategoryUseCase = new DeleteExpensesCategoryUseCase()

    const result = await deleteExpensesCategoryUseCase.execute({
      id,
    })

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
}
