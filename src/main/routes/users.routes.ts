import AuthMiddleware from '@/middlewares/AuthMiddleware'
import { ChangeUserController } from '@/modules/users/useCases/changeUser/ChangeUserController'
import { GetAllUsersController } from '@/modules/users/useCases/getAllUsers/GetAllUsersController'
import { VerifyUserPasswordController } from '@/modules/users/useCases/verifyUserPassword/VerifyUserPasswordController'
import verifyCanExecuteMiddleware from '@middlewares/verifyCanExecuteMiddleware'
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
const verifyUserPasswordController = new VerifyUserPasswordController()

const router = Router()

router.post('/register', createUserController.handle)

router.use(AuthMiddleware)
router.post('/', createUserController.handle)
router.post('/validate-password', verifyUserPasswordController.handle)

router.use(verifyCanExecuteMiddleware)
router.get('/', getAllUserController.handle)
router.get('/status/:id', deactivateUserController.handle)
router.patch('/:id', changeUserController.handle)
router.delete('/', deleteUserController.handle)
router.get('/:id', getUserByIdController.handle)
export default router
