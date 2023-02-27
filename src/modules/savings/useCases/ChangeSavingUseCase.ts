import { AppError } from '@/errors/AppErrors'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { Savings } from '@prisma/client'

import { ChangeSavingDTO } from '../dtos/ChangeSavingDTO'

export class ChangeSavingUseCase {
  async execute({
    goal,
    id,
    user_id,
    month,
    year,
  }: ChangeSavingDTO): Promise<UseCaseResponse<Savings>> {
    // Verificar se  existe
    const savingsAlreadyExists = await prisma.savings.findUnique({
      where: {
        id,
      },
    })

    if (savingsAlreadyExists) {
      return AppError('Saving does not exist!', 404)
    }

    // Criar o usuário
    const data = await prisma.savings.update({
      where: { id },
      data: {
        goal,
        user_id,
        month,
        year,
      },
    })

    return { data, success: true }
  }
}
