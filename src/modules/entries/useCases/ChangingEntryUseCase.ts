import { UseCaseResponse } from '@/@types/useCaseResponse'
import { AppError } from '@/errors/AppErrors'
import { prisma } from '@config/prisma'
import { Entries } from '@prisma/client'

import { ChangeEntryDTO } from '../dtos/ChangeEntryDTO'

export class ChangingEntryUseCase {
  async execute({
    amount,
    category_id,
    date,
    id,
    title,
    user_id,
    recurrent,
    recurrent_number,
  }: ChangeEntryDTO): Promise<UseCaseResponse<Entries>> {
    const entryAlreadyExist = await prisma.entries.findUnique({
      where: { id },
    })

    if (entryAlreadyExist) {
      return AppError('Expense Category does not exist!', 404)
    }

    const data = await prisma.entries.update({
      where: { id },
      data: {
        amount,
        category_id,
        date,
        title,
        user_id,
        recurrent,
        recurrent_number,
      },
    })

    return { success: true, data }
  }
}
