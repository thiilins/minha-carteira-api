import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@config/prisma'
import { EntriesCategories } from '@prisma/client'

export class DeleteEntryCategoryUseCase {
  async execute({
    id,
  }: {
    id: string
  }): Promise<UseCaseResponse<EntriesCategories>> {
    const data = await prisma.entriesCategories.delete({
      where: {
        id,
      },
    })

    return { success: true, data }
  }
}
