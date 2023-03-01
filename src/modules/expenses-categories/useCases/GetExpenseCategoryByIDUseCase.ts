import { AppError } from '@/errors/AppErrors'
import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@config/prisma'
import { ExpensesCategories } from '@prisma/client'

export class GetExpenseCategoryByIdUseCase {
  async execute({
    id,
  }: {
    id: string
  }): Promise<UseCaseResponse<ExpensesCategories[]>> {
    const expenseCategoryAlreadyExists =
      await prisma.expensesCategories.findUnique({
        where: {
          id,
        },
      })

    if (!expenseCategoryAlreadyExists) {
      return AppError('Expense category does not exist!', 404)
    }
    const data = await prisma.expensesCategories.findMany({
      where: { id },
    })
    return { data, success: true }
  }
}
