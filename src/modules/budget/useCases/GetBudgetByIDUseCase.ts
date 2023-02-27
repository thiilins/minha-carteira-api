import { AppError } from '@/errors/AppErrors'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { GeneralBudget } from '@prisma/client'
export class GetBudgetByIDUseCase {
  async execute({
    id,
  }: {
    id: string
  }): Promise<UseCaseResponse<GeneralBudget[]>> {
    const budgetAlreadyExist = await prisma.generalBudget.findUnique({
      where: {
        id,
      },
    })

    if (!budgetAlreadyExist) {
      return AppError('Budget does not exists!', 404)
    }
    const data = await prisma.generalBudget.findMany({
      where: { id },
    })
    return { success: true, data }
  }
}
