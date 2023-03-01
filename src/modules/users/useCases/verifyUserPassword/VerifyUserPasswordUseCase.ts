import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@config/prisma'
import { User } from '@prisma/client'

export class VerifyUserPasswordUseCase {
  async execute({ id }: { id: string }): Promise<UseCaseResponse<User>> {
    const data = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return { success: true, data: data as User }
  }
}
