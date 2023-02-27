import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { GeneralBudget } from '@prisma/client'

export class GetAllBudgetUseCase {
  async execute(): Promise<UseCaseResponse<GeneralBudget[]>> {
    const data = await prisma.generalBudget.findMany()

    return { success: true, data }
  }
}
