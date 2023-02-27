import { Request, Response } from 'express'

import { ChangeSavingUseCase } from './useCases/ChangeSavingUseCase'
import { CreateSavingUseCase } from './useCases/CreateSavingUseCase'
import { DeleteSavingUseCase } from './useCases/DeleteSavingUseCase'
import { GetSavingsUseCase } from './useCases/GetSavingsUseCase'

export class CreateUserController {
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

    return res.status(201).json(result)
  }
  async create(req: Request, res: Response) {
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

    return res.status(201).json(result)
  }
  async update(req: Request, res: Response) {
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

    return res.status(201).json(result)
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params
    const deleteUserUseCase = new DeleteUserUseCase()

    const result = await deleteUserUseCase.execute({
      id,
    })

    return res.status(201).json(result)
  }
  async deactivate(req: Request, res: Response) {
    const { id } = req.params

    const deactivateUserUseCase = new DeactivateUserUseCase()

    const result = await deactivateUserUseCase.execute({
      id,
    })

    return res.status(201).json(result)
  }
}
