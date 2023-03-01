import { Request, Response, NextFunction } from 'express'

export default async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const { id: user_id, is_admin } = req.user!

  if ((!is_admin && !id) || (!is_admin && id && user_id !== id)) {
    return res.status(401).json('Unauthorized access!')
  }
  return next()
}
