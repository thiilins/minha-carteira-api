import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { EntriesCategories } from '@prisma/client'

export class GetAllEntriesCategoriesUseCase {
  async execute(): Promise<UseCaseResponse<EntriesCategories[]>> {
    const data = await prisma.entriesCategories.findMany()

    return { success: true, data }
  }
}
