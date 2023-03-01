import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@config/prisma'
import { BudgetsCategories } from '@prisma/client'

export class DeleteBudgetCategoryUseCase {
  async execute({
    id,
  }: {
    id: string
  }): Promise<UseCaseResponse<BudgetsCategories>> {
    const data = await prisma.budgetsCategories.delete({
      where: {
        id,
      },
    })

    return { success: true, data }
  }
}
