import { Router } from 'express'

import { Add, Delete, Edit, List } from '../controller/expense.controller'

const router = Router()

router.post('/', Add)
router.get('/', List)
router.patch('/', Edit)
router.delete('/', Delete)

export default router
