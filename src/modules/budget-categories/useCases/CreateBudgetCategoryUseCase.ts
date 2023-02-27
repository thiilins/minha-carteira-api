import { prisma } from '@/config/prisma'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { BudgetsCategories } from '@prisma/client'

import { CreateBudgetCategoryDTO } from '../dtos/CreateBudgetCategoryDTO'

export class CreateBudgetCategoryUseCase {
  async execute({
    budget,
    month,
    user_id,
    budget_id,
    category_id,
  }: CreateBudgetCategoryDTO): Promise<UseCaseResponse<BudgetsCategories>> {
    const data = await prisma.budgetsCategories.create({
      data: {
        budget,
        month,
        user_id,
        budget_id,
        category_id,
      },
    })

    return { success: true, data }
  }
}
