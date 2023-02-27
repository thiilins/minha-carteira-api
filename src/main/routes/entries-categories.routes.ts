import { CreateUserController } from '@modules/entries-categories/entries-categories.controller'
import { Router } from 'express'

const router = Router()
const { create, del, list, listById, update } = new CreateUserController()

router.get('/', list)
router.get('/:id', listById)
router.post('/', create)
router.patch('/', update)
router.delete('/', del)

export default router
