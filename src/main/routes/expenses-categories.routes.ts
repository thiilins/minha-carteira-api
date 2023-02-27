import { ExpensesCategoriesController } from '@modules/expenses-categories/expenses-categories.controller'
import { Router } from 'express'

const router = Router()
const { create, del, list, listById, update } =
  new ExpensesCategoriesController()

router.get('/', list)
router.get('/:id', listById)
router.post('/', create)
router.patch('/', update)
router.delete('/', del)

export default router
