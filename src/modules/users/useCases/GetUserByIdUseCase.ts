import { AppError } from '@/errors/AppErrors'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { User } from '@prisma/client'

export class GetUserByIdUseCase {
  async execute({ id }: { id: string }): Promise<UseCaseResponse<User[]>> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!userAlreadyExists) {
      return AppError('User does not exists!', 404)
    }
    const data = await prisma.user.findMany({ where: { id } })

    return { success: true, data }
  }
}
