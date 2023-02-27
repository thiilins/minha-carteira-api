import { prisma } from '@/config/prisma'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { GeneralBudget } from '@prisma/client'

import { CreateBudgetDTO } from '../dtos/CreateBudgetDTO'

export class CreateBudgetUseCase {
  async execute({
    budget,
    month,
    user_id,
  }: CreateBudgetDTO): Promise<UseCaseResponse<GeneralBudget>> {
    const data = await prisma.generalBudget.create({
      data: {
        budget,
        month,
        user_id,
      },
    })

    return { success: true, data }
  }
}
