import { UseCaseResponse } from '@/@types/useCaseResponse'
import { AppError } from '@/errors/AppErrors'
import { prisma } from '@config/prisma'
import { EntriesCategories } from '@prisma/client'

export class GetEntryCategoryByIdUseCase {
  async execute({
    id,
  }: {
    id: string
  }): Promise<UseCaseResponse<EntriesCategories[]>> {
    const entryCategoryAlreadyExists =
      await prisma.entriesCategories.findUnique({
        where: {
          id,
        },
      })

    if (!entryCategoryAlreadyExists) {
      return AppError('Entry Category does not exist!', 404)
    }
    const data = await prisma.entriesCategories.findMany({
      where: { id },
    })
    return { success: true, data }
  }
}
