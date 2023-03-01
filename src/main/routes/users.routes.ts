import { ChangeUserController } from '@/modules/users/useCases/changeUser/ChangeUserController'
import { GetAllUsersController } from '@/modules/users/useCases/getAllUsers/GetAllUsersController'
import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController'
import { DeactivateUserController } from '@modules/users/useCases/deactivateUser/DeactivateUserController'
import { DeleteUserController } from '@modules/users/useCases/deleteUser/DeleteUserController'
import { GetUserByIdController } from '@modules/users/useCases/getUserById/GetUserByIdController'
import { Router } from 'express'

const changeUserController = new ChangeUserController()
const createUserController = new CreateUserController()
const deactivateUserController = new DeactivateUserController()
const deleteUserController = new DeleteUserController()
const getAllUserController = new GetAllUsersController()
const getUserByIdController = new GetUserByIdController()

const router = Router()

router.get('/', getAllUserController.handle)
router.get('/status/:id', deactivateUserController.handle)
router.get('/:id', getUserByIdController.handle)
router.post('/', createUserController.handle)
router.patch('/:id', changeUserController.handle)
router.delete('/', deleteUserController.handle)

export default router
