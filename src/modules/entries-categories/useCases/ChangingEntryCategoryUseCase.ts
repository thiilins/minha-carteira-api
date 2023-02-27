import { AppError } from '@/errors/AppErrors'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { EntriesCategories } from '@prisma/client'

import { ChangeEntryCategoryDTO } from '../dtos/ChangeEntryCategoryDTO'

export class ChangingEntryCategoryUseCase {
  async execute({
    icon,
    id,
    name,
    user_id,
  }: ChangeEntryCategoryDTO): Promise<UseCaseResponse<EntriesCategories>> {
    const entryCategoryAlreadyExist = await prisma.entriesCategories.findUnique(
      {
        where: { id },
      }
    )

    if (entryCategoryAlreadyExist) {
      return AppError('Expense Category does not exist!', 404)
    }

    const data = await prisma.entriesCategories.update({
      where: { id },
      data: {
        icon,
        name,
        user_id,
      },
    })

    return { success: true, data }
  }
}
