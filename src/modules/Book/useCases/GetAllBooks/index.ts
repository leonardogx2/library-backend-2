import { BookRepository } from '../../infra/repositories/prisma/BookRepository';
import { GetAllBooksController } from './GetAllBooksController';
import { GetAllBooksUseCase } from './GetAllBooksUseCase';

const bookRepository = new BookRepository();

const getAllBooksUseCase = new GetAllBooksUseCase(bookRepository);
const getAllBooksController = new GetAllBooksController();

export { getAllBooksController, getAllBooksUseCase };
