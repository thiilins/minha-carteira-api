import { UseCaseResponse } from '@/@types/useCaseResponse'
import { AppError } from '@/errors/AppErrors'
import { prisma } from '@config/prisma'
import { Expenses } from '@prisma/client'

export class GetExpenseByIdUseCase {
  async execute({ id }: { id: string }): Promise<UseCaseResponse<Expenses[]>> {
    const expenseAlreadyExists = await prisma.expenses.findUnique({
      where: {
        id,
      },
    })

    if (!expenseAlreadyExists) {
      return AppError('Expense does not exist!', 404)
    }
    const data = await prisma.expenses.findMany({
      where: { id },
    })
    return { success: true, data }
  }
}
