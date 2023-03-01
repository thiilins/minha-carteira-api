import { TokenPayload } from '@/@types/TokenPayload'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({
      error: true,
      message: 'Unauthorized: Authentication Token does not exist',
    })
  }
  const [, token] = authorization.split(' ')
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as any
    ) as TokenPayload
    if (decoded) {
      req.user = {
        id: decoded.id,
        is_admin: decoded.admin,
        email: decoded.email,
      }
      next()
    }
  } catch (error: any) {
    return res
      .status(401)
      .json({ error: true, type: error.name, message: error.message })
  }
}
