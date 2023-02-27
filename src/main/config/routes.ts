import { Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'

const router = Router()

readdirSync(path.join(__dirname, '..', 'routes')).map(async file => {
  if (!file.includes('.test.')) {
    router.use(
      `/${file.split('.')[0]}`,
      (await import(`../routes/${file}`)).default
    )
  }
})

export default router
