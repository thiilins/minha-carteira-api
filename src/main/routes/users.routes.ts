import { UsersController } from '@modules/users/user.controller'
import { Router } from 'express'

const router = Router()
const { create, del, list, listById, update, deactivate } =
  new UsersController()

router.get('/', list)
router.get('/deactivate/:id', deactivate)
router.get('/:id', listById)
router.post('/', create)
router.patch('/', update)
router.delete('/', del)

export default router
