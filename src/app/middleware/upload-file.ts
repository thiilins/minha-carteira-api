import path from 'path'

import { Request } from 'express'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: (
    _req: Request,
    _file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => any,
  ) => {
    cb(null, 'public/uploads/')
  },
  filename: (
    _req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => any,
  ) => {
    cb(null, `${Date.now()}_upload_${path.extname(file.originalname)}`)
  },
})

export default multer({ storage })
