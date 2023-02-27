import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { GeneralBudget } from '@prisma/client'

export class DeleteBudgetUseCase {
  async execute({
    id,
  }: {
    id: string
  }): Promise<UseCaseResponse<GeneralBudget>> {
    const data = await prisma.generalBudget.delete({
      where: {
        id,
      },
    })

    return { success: true, data }
  }
}
