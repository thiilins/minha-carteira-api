import { prisma } from '@/config/prisma'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { Entries } from '@prisma/client'

import { CreateEntryDTO } from '../dtos/CreateEntryDTO'

export class CreateEntryUseCase {
  async execute({
    amount,
    category_id,
    date,
    title,
    user_id,
    recurrent,
    recurrent_number,
  }: CreateEntryDTO): Promise<UseCaseResponse<Entries>> {
    const data = await prisma.entries.create({
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
