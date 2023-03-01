import { UseCaseResponse } from '@/@types/useCaseResponse'
import { prisma } from '@config/prisma'
import { User } from '@prisma/client'

import { LoginDTO } from '../../dtos/LoginDTO'

export class LoginUseCase {
  async execute({ email }: LoginDTO): Promise<UseCaseResponse<User | null>> {
    const data = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (!data) {
      return { success: false, error: 400, message: 'User does not exists!' }
    }
    return { success: true, data }
  }
}
