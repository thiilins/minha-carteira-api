import { AppError } from '@/errors/AppErrors'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { User } from '@prisma/client'

import { ChangeUserDTO } from '../dtos/ChangeUserDTO'

export class ChangeUserUseCase {
  async execute({
    id,
    name,
    email,
    password,
    telefone,
    admin,
    avatar,
  }: ChangeUserDTO): Promise<UseCaseResponse<User>> {
    // Verificar se o usuário existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!userAlreadyExists) {
      return AppError('User does not exist!', 404)
    }

    // Criar o usuário
    const data = await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        password,
        telefone,
        admin,
        avatar,
      },
    })

    return { success: true, data }
  }
}
