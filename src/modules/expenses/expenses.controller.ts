import { Request, Response } from 'express'

import { ChangingExpenseUseCase } from './useCases/ChangingExpenseUseCase'
import { CreateExpenseUseCase } from './useCases/CreateExpenseUseCase'
import { DeleteExpenseUseCase } from './useCases/DeleteExpenseUseCase'
import { GetAllExpenseUseCase } from './useCases/GetAllExpenseUseCase'
import { GetExpenseByIdUseCase } from './useCases/GetExpenseByIdUseCase'

export class ExpensesController {
  async list(req: Request, res: Response) {
    const getAllExpenseUseCase = new GetAllExpenseUseCase()
    const result = await getAllExpenseUseCase.execute()
    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
  async listById(req: Request, res: Response) {
    const { id } = req.params
    const getExpenseByIdUseCase = new GetExpenseByIdUseCase()
    const result = await getExpenseByIdUseCase.execute({
      id,
    })
    return result.success
      ? res.status(201).json(result.data)
      : res.status(result.error!).json(result.message)
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
    const createExpenseUseCase = new CreateExpenseUseCase()
    const result = await createExpenseUseCase.execute({
      amount,
      category_id,
      date,
      title,
      user_id,
      recurrent,
      recurrent_number,
    })
    return result.success
      ? res.status(201).json(result.data)
      : res.status(result.error!).json(result.message)
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
    const changingExpenseUseCase = new ChangingExpenseUseCase()
    const result = await changingExpenseUseCase.execute({
      amount,
      category_id,
      date,
      id,
      title,
      user_id,
      recurrent,
      recurrent_number,
    })
    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }

  async del(req: Request, res: Response) {
    const { id } = req.params
    const deleteExpenseUseCase = new DeleteExpenseUseCase()
    const result = await deleteExpenseUseCase.execute({
      id,
    })
    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
}
