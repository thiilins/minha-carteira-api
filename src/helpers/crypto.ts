import bcrypt from 'bcryptjs'

export default {
  create(data: string) {
    return bcrypt.hashSync(data, 10)
  },
  validate(data: string, hash: string) {
    return bcrypt.compareSync(data, hash)
  },
}
