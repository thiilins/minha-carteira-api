import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@config/prisma'
import { User } from '@prisma/client'

export class GetAllUsersUseCase {
  async execute(): Promise<UseCaseResponse<User[]>> {
    const data = await prisma.user.findMany()

    return { success: true, data }
  }
}
