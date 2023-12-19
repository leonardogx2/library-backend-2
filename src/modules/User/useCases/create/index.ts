import { UserRepositoryPrisma } from '../../infra/repositories/prisma/UserRepositoryPrisma';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const userRepository = new UserRepositoryPrisma();

export const createUserUseCase = new CreateUserUseCase(userRepository);

export const createUserController = new CreateUserController();
