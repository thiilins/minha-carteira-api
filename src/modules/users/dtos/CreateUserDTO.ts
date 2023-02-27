export interface CreateUserDTO {
  email: string
  telefone?: string
  name?: string
  password: string
  admin?: boolean
  avatar?: string
}
