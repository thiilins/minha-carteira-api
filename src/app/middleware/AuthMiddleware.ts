import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import config from '@/config/auth'

interface TokenPayload {
  id: string
  isAdmin: boolean
}

interface AuthenticatedRequest extends Request {
  user_id?: string
  isAdmin?: boolean
}

export default async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  const auth = req.headers.authorization
  if (!auth) {
    return res.status(401).json({
      error: true,
      message: 'Unauthorized: Authentication Token does not exist',
    })
  }
  const [, token] = auth.split(' ')
  try {
    const decoded = jwt.verify(token, config.secret) as TokenPayload
    if (decoded) {
      req.user_id = decoded.id
      req.isAdmin = decoded.isAdmin
      next()
    }
  } catch (error: any) {
    return res
      .status(401)
      .json({ error: true, type: error.name, message: error.message })
  }
}
