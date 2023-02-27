import compression from 'compression'
import cors from 'cors'
import express, { Express, Request, Response, NextFunction } from 'express'
import session from 'express-session'
import path from 'path'

export default (app: Express): void => {
  app.use(express.static(path.resolve('src', 'public')))
  app.use(express.json({ limit: '100mb' }))
  app.use(express.urlencoded({ limit: '100mb', extended: false }))
  app.use(compression())
  app.use(
    session({
      resave: true,
      saveUninitialized: true,
      secret: 'this shit hits',
    })
  )

  app.use(cors())
  app.use((req: Request, _res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url} from ${req.ip}`)
    next()
  })
}
