import { BookRepository } from '../../../Book/infra/repositories/prisma/BookRepository';
import { RentRepository } from '../../infra/repositories/prisma/RentRepository';
import { CreateRentController } from './CreateRentController';
import { CreateRentUseCase } from './CreateRentUseCase';

const rentRepo = new RentRepository();
const bookRepo = new BookRepository();

const createRentUseCase = new CreateRentUseCase(rentRepo, bookRepo);
const createRentController = new CreateRentController();

export { createRentController, createRentUseCase };
