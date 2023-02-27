import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { Entries } from '@prisma/client'

export class GetAllEntryUseCase {
  async execute(): Promise<UseCaseResponse<Entries[]>> {
    const data = await prisma.entries.findMany()

    return { success: true, data }
  }
}
