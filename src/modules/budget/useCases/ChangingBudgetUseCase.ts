import { UseCaseResponse } from '@/@types/useCaseResponse'
import { AppError } from '@/errors/AppErrors'
import { prisma } from '@config/prisma'
import { GeneralBudget } from '@prisma/client'

import { ChangeBudgetDTO } from '../dtos/ChangeBudgetDTO'

export class ChangingBudgetUseCase {
  async execute({
    budget,
    id,
    month,
    user_id,
  }: ChangeBudgetDTO): Promise<UseCaseResponse<GeneralBudget>> {
    const budgetAlreadyExist = await prisma.generalBudget.findUnique({
      where: { id },
    })

    if (budgetAlreadyExist) {
      return AppError('Budget does not exists!', 404)
    }

    const data = await prisma.generalBudget.update({
      where: { id },
      data: { budget, month, user_id },
    })

    return { success: true, data }
  }
}
