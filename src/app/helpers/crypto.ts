import bcrypt from 'bcryptjs'

export default {
  create(data: string) {
    return bcrypt.hashSync(data, 12)
  },
  validate(data: string, hash: string) {
    return bcrypt.compareSync(data, hash)
  },
}
