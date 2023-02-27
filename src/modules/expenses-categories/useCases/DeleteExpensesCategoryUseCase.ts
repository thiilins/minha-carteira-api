import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { ExpensesCategories } from '@prisma/client'

export class DeleteExpensesCategoryUseCase {
  async execute({
    id,
  }: {
    id: string
  }): Promise<UseCaseResponse<ExpensesCategories>> {
    const data = await prisma.expensesCategories.delete({
      where: {
        id,
      },
    })

    return { data, success: true }
  }
}
