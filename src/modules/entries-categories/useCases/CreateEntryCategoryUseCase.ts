import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@/config/prisma'
import { EntriesCategories } from '@prisma/client'

import { CreateEntryCategoryDTO } from '../dtos/CreateEntryCategoryDTO'

export class CreateEntryCategoryUseCase {
  async execute({
    icon,
    name,
    user_id,
  }: CreateEntryCategoryDTO): Promise<UseCaseResponse<EntriesCategories>> {
    const data = await prisma.entriesCategories.create({
      data: {
        icon,
        name,
        user_id,
      },
    })

    return { success: true, data }
  }
}
