export interface ChangeUserDTO {
  id: string
  email: string
  telefone: number
  name?: string
  password: string
  admin?: boolean
  avatar?: string
}
