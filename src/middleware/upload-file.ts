import path from 'path'
import { Request } from 'express'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, destination: string) => void
  ) => callback(null, 'public/uploads/'),
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => any
  ) => cb(null, `${Date.now()}_upload_${path.extname(file.originalname)}`),
})

export default multer({ storage })
