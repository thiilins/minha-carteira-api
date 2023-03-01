import { UseCaseResponse } from '@/@types/useCaseResponse'
import { AppError } from '@/errors/AppErrors'
import { prisma } from '@config/prisma'
import { Entries } from '@prisma/client'

export class GetEntryByIdUseCase {
  async execute({ id }: { id: string }): Promise<UseCaseResponse<Entries[]>> {
    const entryAlreadyExists = await prisma.entries.findUnique({
      where: {
        id,
      },
    })

    if (!entryAlreadyExists) {
      return AppError('Entry does not exist!', 404)
    }
    const data = await prisma.entries.findMany({
      where: { id },
    })
    return { success: true, data }
  }
}
