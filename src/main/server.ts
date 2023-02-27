/* eslint-disable @typescript-eslint/no-var-requires */
import { normalizePort } from '@/helpers/normalizePort'
import { join } from 'path'

require('dotenv-safe').config({ path: join(__dirname, '..', '..', '.env') })

import { app } from './config/app'
const PORT: any = normalizePort(process.env.PORT || '3000')

const main = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}
main()
