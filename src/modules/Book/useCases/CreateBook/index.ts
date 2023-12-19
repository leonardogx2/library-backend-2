import { BookRepository } from '../../infra/repositories/prisma/BookRepository';
import { CreateBookController } from './CreateBookController';
import { CreateBookUseCase } from './CreateBookUseCase';

const bookRepository = new BookRepository();

const createBookController = new CreateBookController();
const createBookUseCase = new CreateBookUseCase(bookRepository);

export { createBookController, createBookUseCase };
