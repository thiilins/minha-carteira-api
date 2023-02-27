import { prisma } from '@/config/prisma'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { ExpensesCategories } from '@prisma/client'

import { CreateExpenseCategoryDTO } from '../dtos/CreateExpenseCategoryDTO'

export class CreateExpensesCategoryUseCase {
  async execute({
    icon,
    name,
    user_id,
  }: CreateExpenseCategoryDTO): Promise<UseCaseResponse<ExpensesCategories>> {
    const data = await prisma.expensesCategories.create({
      data: {
        icon,
        name,
        user_id,
      },
    })

    return { data, success: true }
  }
}
