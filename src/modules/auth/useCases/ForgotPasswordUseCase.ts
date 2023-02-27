import { AppError } from '@/errors/AppErrors'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { User } from '@prisma/client'

import { ForgotPasswordDTO } from '../dtos/ForgotPasswordDTO'

export class GetExpenseByIDUseCase {
  async execute({ email }: ForgotPasswordDTO): Promise<UseCaseResponse<User>> {
    const data = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!data) {
      return AppError('User not exists!', 404)
    }
    return { success: true, data }
  }
}
