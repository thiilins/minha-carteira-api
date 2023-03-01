import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@config/prisma'
import { Savings } from '@prisma/client'

export class GetAllSavingsUseCase {
  async execute(): Promise<UseCaseResponse<Savings[]>> {
    const data = await prisma.savings.findMany()

    return { data, success: true }
  }
}
