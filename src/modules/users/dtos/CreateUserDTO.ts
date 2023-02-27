export interface CreateUserDTO {
  email: string
  telefone: number
  name?: string
  password: string
  admin?: boolean
  avatar?: string
}
