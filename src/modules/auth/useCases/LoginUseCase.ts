import { AppError } from '@/errors/AppErrors'
import { UseCaseResponse } from '@/types/useCaseResponse'
import { prisma } from '@config/prisma'
import { User } from '@prisma/client'

import { LoginDTO } from '../dtos/LoginDTO'

export class LoginUseCase {
  async execute({ email, password }: LoginDTO): Promise<UseCaseResponse<User>> {
    const data = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!data || (data && data.password === password)) {
      return AppError('Unauthorized access!', 401)
    }
    return { success: true, data }
  }
}
