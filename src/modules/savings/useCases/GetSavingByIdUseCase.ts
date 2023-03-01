import { UseCaseResponse } from '@/@types/useCaseResponse'
import { AppError } from '@/errors/AppErrors'
import { prisma } from '@config/prisma'
import { Savings } from '@prisma/client'

export class GetSavingByIdUseCase {
  async execute({ id }: { id: string }): Promise<UseCaseResponse<Savings[]>> {
    const savingsAlreadyExists = await prisma.savings.findUnique({
      where: {
        id,
      },
    })

    if (!savingsAlreadyExists) {
      return AppError('Saving does not exist!', 404)
    }
    const data = await prisma.savings.findMany({ where: { id } })
    return { data, success: true }
  }
}
