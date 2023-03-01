import { AppError } from '@/errors/AppErrors'
import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@config/prisma'
import { BudgetsCategories } from '@prisma/client'

export class GetBudgetCategoryByIdUseCase {
  async execute({
    id,
  }: {
    id: string
  }): Promise<UseCaseResponse<BudgetsCategories[]>> {
    const budgetCategoryAlreadyExists =
      await prisma.expensesCategories.findUnique({
        where: {
          id,
        },
      })

    if (!budgetCategoryAlreadyExists) {
      return AppError('Budget category does not exist!', 404)
    }
    const data = await prisma.budgetsCategories.findMany({
      where: { id },
    })
    return { success: true, data }
  }
}
