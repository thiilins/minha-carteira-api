import { AppError } from '@/errors/AppErrors'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { Expenses } from '@prisma/client'

import { ChangeExpenseDTO } from '../dtos/ChangeExpenseDTO'

export class ChangingExpenseUseCase {
  async execute({
    amount,
    category_id,
    date,
    id,
    title,
    user_id,
    recurrent,
    recurrent_number,
  }: ChangeExpenseDTO): Promise<UseCaseResponse<Expenses>> {
    const expenseAlreadyExists = await prisma.expenses.findUnique({
      where: { id },
    })

    if (!expenseAlreadyExists) {
      return AppError('Expense does not exist!', 404)
    }

    const data = await prisma.expenses.update({
      where: { id },
      data: {
        amount,
        category_id,
        date,
        title,
        user_id,
        recurrent,
        recurrent_number,
      },
    })

    return { success: true, data }
  }
}
