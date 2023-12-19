import { BookRepository } from '../../infra/repositories/prisma/BookRepository';
import { GetBookByIdController } from './GetBookByIdController';
import { GetBookByIdUseCase } from './GetBookByIdUseCase';

const bookRepository = new BookRepository();

const getBookByIdController = new GetBookByIdController();
const getBookByIdUseCase = new GetBookByIdUseCase(bookRepository);

export { getBookByIdController, getBookByIdUseCase };
