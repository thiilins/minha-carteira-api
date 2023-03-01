import { prisma } from '@/config/prisma'
import { AppError } from '@/errors/AppErrors'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { User } from '@prisma/client'

import { CreateUserDTO } from '../../dtos/CreateUserDTO'

export class CreateUserUseCase {
  async execute({
    name,
    email,
    password,
    telefone,
    admin,
    avatar,
  }: CreateUserDTO): Promise<UseCaseResponse<User>> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userAlreadyExists) {
      return AppError('User already exists!', 400)
    }

    const data = await prisma.user.create({
      data: {
        name,
        email,
        password,
        telefone,
        admin,
        avatar,
      },
    })

    return { data, success: true }
  }
}
