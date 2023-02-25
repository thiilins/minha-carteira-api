import normalizePort from '@helpers/normalizePort'

import app from './app'

const PORT: any = normalizePort(process.env.PORT || '3000')

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
