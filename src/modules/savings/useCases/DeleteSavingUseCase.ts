import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@config/prisma'
import { Savings } from '@prisma/client'

export class DeleteSavingUseCase {
  async execute({ id }: { id: string }): Promise<UseCaseResponse<Savings>> {
    const data = await prisma.savings.delete({
      where: {
        id,
      },
    })

    return { data, success: true }
  }
}
