import { UserRepositoryPrisma } from '../../infra/repositories/prisma/UserRepositoryPrisma';
import { LoginUserController } from './LoginUserController';
import { LoginUserUseCase } from './LoginUserUseCase';

const userRepo = new UserRepositoryPrisma();

const loginUserController = new LoginUserController();
const loginUserUseCase = new LoginUserUseCase(userRepo);

export { loginUserController, loginUserUseCase };
