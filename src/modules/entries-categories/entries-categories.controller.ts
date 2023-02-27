import { Request, Response } from 'express'

import { ChangingEntryCategoryUseCase } from './useCases/ChangingEntryCategoryUseCase'
import { CreateEntryCategoryUseCase } from './useCases/CreateEntryCategoryUseCase'
import { DeleteEntryCategoryUseCase } from './useCases/DeleteEntryCategoryUseCase'
import { GetAllEntriesCategoriesUseCase } from './useCases/GetAllEntriesCategoriesUseCase'
import { GetEntryCategoryByIdUseCase } from './useCases/GetEntryCategoryByIdUseCase'

export class CreateUserController {
  async list(req: Request, res: Response) {
    const getAllEntriesCategoriesUseCase = new GetAllEntriesCategoriesUseCase()

    const result = await getAllEntriesCategoriesUseCase.execute()

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
  async listById(req: Request, res: Response) {
    const { id } = req.params

    const getEntryCategoryByIdUseCase = new GetEntryCategoryByIdUseCase()

    const result = await getEntryCategoryByIdUseCase.execute({
      id,
    })

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }

  async create(req: Request, res: Response) {
    const { icon, name, user_id } = req.body

    const createEntryCategoryUseCase = new CreateEntryCategoryUseCase()

    const result = await createEntryCategoryUseCase.execute({
      icon,
      name,
      user_id,
    })

    return result.success
      ? res.status(201).json(result.data)
      : res.status(result.error!).json(result.message)
  }
  async update(req: Request, res: Response) {
    const { icon, name, user_id } = req.body
    const { id } = req.params

    const changingEntryCategoryUseCase = new ChangingEntryCategoryUseCase()

    const result = await changingEntryCategoryUseCase.execute({
      id,
      icon,
      name,
      user_id,
    })

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
  async del(req: Request, res: Response) {
    const { id } = req.params
    const deleteEntryCategoryUseCase = new DeleteEntryCategoryUseCase()

    const result = await deleteEntryCategoryUseCase.execute({
      id,
    })

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
}
