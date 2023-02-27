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

    return res.status(201).json(result)
  }
  async listById(req: Request, res: Response) {
    const { id } = req.params

    const getUserByIdUseCase = new GetUserByIdUseCase()

    const result = await getUserByIdUseCase.execute({
      id,
    })

    return res.status(result.error ?? 200).json(result.message ?? result.data)
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

    return res.status(result.error ?? 201).json(result.message ?? result.data)
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

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const deleteUserUseCase = new DeleteUserUseCase()

    const result = await deleteUserUseCase.execute({
      id,
    })

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
  async deactivate(req: Request, res: Response) {
    const { id } = req.params

    const deactivateUserUseCase = new DeactivateUserUseCase()

    const result = await deactivateUserUseCase.execute({
      id,
    })

    return res.status(result.error ?? 200).json(result.message ?? result.data)
  }
}
