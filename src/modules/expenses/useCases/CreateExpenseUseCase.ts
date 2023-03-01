import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@/config/prisma'
import { Expenses } from '@prisma/client'

import { CreateExpenseDTO } from '../dtos/CreateExpenseDTO'

export class CreateExpenseUseCase {
  async execute({
    amount,
    category_id,
    date,
    title,
    user_id,
    recurrent,
    recurrent_number,
  }: CreateExpenseDTO): Promise<UseCaseResponse<Expenses>> {
    const data = await prisma.expenses.create({
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
