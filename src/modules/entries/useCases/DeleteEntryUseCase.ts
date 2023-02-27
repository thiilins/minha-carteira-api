import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { Entries } from '@prisma/client'

export class DeleteEntryUseCase {
  async execute({ id }: { id: string }): Promise<UseCaseResponse<Entries>> {
    const data = await prisma.entries.delete({
      where: {
        id,
      },
    })

    return { success: true, data }
  }
}
