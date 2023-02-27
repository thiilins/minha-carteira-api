export interface ChangeUserDTO {
  id: string
  email: string
  telefone?: string
  name?: string
  password: string
  admin?: boolean
  avatar?: string
}
