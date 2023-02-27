import { AppError } from '@/errors/AppErrors'
import { prisma } from '@config/prisma'
import { ExpensesCategories } from '@prisma/client'

import { UseCaseResponse } from '../../../types/useCaseResponse'
import { ChangeExpenseCategoryDTO } from '../dtos/ChangeExpenseCategoryDTO'

export class ChangingExpensesCategoryUseCase {
  async execute({
    icon,
    id,
    name,
    user_id,
  }: ChangeExpenseCategoryDTO): Promise<UseCaseResponse<ExpensesCategories>> {
    const expenseCategoryAlreadyExist =
      await prisma.expensesCategories.findUnique({
        where: { id },
      })

    if (expenseCategoryAlreadyExist) {
      return AppError('Expense Category does not exist!', 404)
    }

    const data = await prisma.expensesCategories.update({
      where: { id },
      data: {
        icon,
        name,
        user_id,
      },
    })

    return { data, success: true }
  }
}
