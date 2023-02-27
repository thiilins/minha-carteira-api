import { Request, Response } from 'express'

import { ChangeUserUseCase } from './useCases/ChangeUserUseCase'
import { CreateUserUseCase } from './useCases/CreateUserUseCase'
import { DeactivateUserUseCase } from './useCases/DeactivateUserUseCase'
import { DeleteUserUseCase } from './useCases/DeleteUserUseCase'
import { GetAllUsersUseCase } from './useCases/GetAllUsersUseCase'
import { GetUserByIdUseCase } from './useCases/GetUserByIdUseCase'
export class UsersController {
  async list(req: Request, res: Response) {
    const getAllUserUseCase = new GetAllUsersUseCase()

    const result = await getAllUserUseCase.execute()

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
  async listById(req: Request, res: Response) {
    const { id } = req.params

    const getUserByIdUseCase = new GetUserByIdUseCase()

    const result = await getUserByIdUseCase.execute({
      id,
    })

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
  async create(req: Request, res: Response) {
    const { name, email, password, telefone, admin, avatar } = req.body

    const createUserUseCase = new CreateUserUseCase()

    const result = await createUserUseCase.execute({
      name,
      email,
      password,
      telefone,
      admin,
      avatar,
    })

    return result.success
      ? res.status(201).json(result.data)
      : res.status(result.error!).json(result.message)
  }
  async update(req: Request, res: Response) {
    const { name, email, password, telefone, admin, avatar } = req.body
    const { id } = req.params

    const changeUserUseCase = new ChangeUserUseCase()

    const result = await changeUserUseCase.execute({
      id,
      name,
      email,
      password,
      telefone,
      admin,
      avatar,
    })

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }

  async del(req: Request, res: Response) {
    const { id } = req.params
    const deleteUserUseCase = new DeleteUserUseCase()

    const result = await deleteUserUseCase.execute({
      id,
    })

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
  async deactivate(req: Request, res: Response) {
    const { id } = req.params

    const deactivateUserUseCase = new DeactivateUserUseCase()

    const result = await deactivateUserUseCase.execute({
      id,
    })

    return result.success
      ? res.status(200).json(result.data)
      : res.status(result.error!).json(result.message)
  }
}
