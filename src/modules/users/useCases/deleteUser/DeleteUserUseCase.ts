import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@config/prisma'
import { User } from '@prisma/client'

export class DeleteUserUseCase {
  async execute({ id }: { id: string }): Promise<UseCaseResponse<User>> {
    const data = await prisma.user.delete({
      where: {
        id,
      },
    })

    return { data, success: true }
  }
}
