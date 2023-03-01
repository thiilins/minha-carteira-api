import { UseCaseResponse } from '@/@types/useCaseResponse'
import { AppError } from '@/errors/AppErrors'
import { prisma } from '@config/prisma'
import { BudgetsCategories } from '@prisma/client'

import { ChangeBudgetCategoryDTO } from '../dtos/ChangeBudgetCategoryDTO'

export class ChangingBudgetCategoryUseCase {
  async execute({
    budget,
    id,
    month,
    user_id,
    budget_id,
    category_id,
  }: ChangeBudgetCategoryDTO): Promise<UseCaseResponse<BudgetsCategories>> {
    const budgetCategoryAlreadyExist =
      await prisma.budgetsCategories.findUnique({
        where: { id },
      })

    if (!budgetCategoryAlreadyExist) {
      return AppError('Budget category does not exist!', 404)
    }

    const data = await prisma.budgetsCategories.update({
      where: { id },
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
