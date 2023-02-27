import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { Expenses } from '@prisma/client'

export class GetAllExpenseUseCase {
  async execute(): Promise<UseCaseResponse<Expenses[]>> {
    const data = await prisma.expenses.findMany()

    return { success: true, data }
  }
}
