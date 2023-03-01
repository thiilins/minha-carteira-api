import { UseCaseResponse } from '@/@types/useCaseResponse'
import { AppError } from '@/errors/AppErrors'
import { prisma } from '@config/prisma'
import { User } from '@prisma/client'

export class GetUserProfileUseCase {
  async execute({ id }: { id: string }): Promise<UseCaseResponse<User>> {
    const data = await prisma.user.findMany({ where: { id } })

    return { success: true, data: data[0] }
  }
}
