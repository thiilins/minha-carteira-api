import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { BudgetsCategories } from '@prisma/client'

export class GetAllBudgetCategoryUseCase {
  async execute(): Promise<UseCaseResponse<BudgetsCategories[]>> {
    const data = await prisma.budgetsCategories.findMany()
    return { success: true, data }
  }
}
