import { prisma } from '@/config/prisma'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { Savings } from '@prisma/client'

import { CreateSavingDTO } from '../dtos/CreateSavingDTO'

export class CreateSavingUseCase {
  async execute({
    goal,
    user_id,
    month,
    year,
  }: CreateSavingDTO): Promise<UseCaseResponse<Savings>> {
    const data = await prisma.savings.create({
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
