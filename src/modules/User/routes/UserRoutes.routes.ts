import { Router } from 'express';
//import { getUserController } from '../useCases/getAll';
//import { createUserController } from '../useCases/create';
import { loginUserController } from '../useCases/LoginUser';

const userRouter = Router();

userRouter.post('/auth/login', loginUserController.handle);
//userRouter.get('/', getUserController.handle);
//userRouter.post('/auth/register', createUserController.handle);

export { userRouter };
