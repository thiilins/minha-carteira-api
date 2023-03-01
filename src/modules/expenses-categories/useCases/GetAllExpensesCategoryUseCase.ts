import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@config/prisma'
import { ExpensesCategories } from '@prisma/client'

export class GetAllExpensesCategoryUseCase {
  async execute(): Promise<UseCaseResponse<ExpensesCategories[]>> {
    const data = await prisma.expensesCategories.findMany()

    return { data, success: true }
  }
}
