import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@config/prisma'
import { Expenses } from '@prisma/client'

export class DeleteExpenseUseCase {
  async execute({ id }: { id: string }): Promise<UseCaseResponse<Expenses>> {
    const data = await prisma.expenses.delete({
      where: {
        id,
      },
    })

    return { success: true, data }
  }
}
