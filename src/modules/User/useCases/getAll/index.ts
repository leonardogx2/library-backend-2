import { UserRepositoryPrisma } from '../../infra/repositories/prisma/UserRepositoryPrisma';
import { GetUserController } from './getAll.controller';
import { GetUsersUseCase } from './getAllUsers.useCase';

const userRepository = new UserRepositoryPrisma();

export const getUserUseCase = new GetUsersUseCase(userRepository);

export const getUserController = new GetUserController();
