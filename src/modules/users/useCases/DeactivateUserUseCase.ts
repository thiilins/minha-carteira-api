import { AppError } from '@/errors/AppErrors'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { User } from '@prisma/client'

export class DeactivateUserUseCase {
  async execute({ id }: { id: string }): Promise<UseCaseResponse<User>> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!userAlreadyExists) {
      return AppError('User does not exists!', 404)
    }
    const enable = userAlreadyExists!.enable
    // Criar o usuário
    const data = await prisma.user.update({
      where: {
        id,
      },
      data: { enable: !enable },
    })

    return { success: true, data }
  }
}
