import { ExpensesController } from '@modules/expenses/expenses.controller'
import { Router } from 'express'

const router = Router()
const { create, del, list, listById, update } = new ExpensesController()

router.get('/', list)
router.get('/:id', listById)
router.post('/', create)
router.patch('/', update)
router.delete('/', del)

export default router
