import express, { NextFunction, Request, Response } from 'express'

import setupMiddleware from './middleware'
import router from './routes'

const app = express()
setupMiddleware(app)
app.use('/', router)

app.use((_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).send('Oops! something went wrong - 404 NOT FOUND')
})
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err)

  if ((err as any[])?.[0]?.isValidationError) {
    res.status(400).json({
      status: 400,
      success: false,
      message: 'Validation error',
      error: {
        type: 'ValidationException',
        message: 'Some fields are invalid',
        description: (err as any[]).map(
          validationErrors => Object.entries(validationErrors.constraints)[0][1]
        ),
      },
    })
  }

  res
    .status((err as any)?.statusCode || (err as any)?.status || 500)
    .json({ error: err })

  next()
})

export { app }
