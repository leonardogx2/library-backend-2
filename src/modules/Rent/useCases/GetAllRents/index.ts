import { RentRepository } from '../../infra/repositories/prisma/RentRepository';
import { GetAllRentsController } from './GetAllRentsController';
import { GetAllRentsUseCase } from './GetAllRentsUseCase';

const rentRepository = new RentRepository();

const getAllRentsUseCase = new GetAllRentsUseCase(rentRepository);
const getAllRentsController = new GetAllRentsController();

export { getAllRentsController, getAllRentsUseCase };
