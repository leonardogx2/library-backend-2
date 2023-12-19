import { BookRepository } from '../../infra/repositories/prisma/BookRepository';
import { UpdateBookController } from './UpdateBookController';
import { UpdateBookUseCase } from './UpdateBookUseCase';

const bookRepository = new BookRepository();

const updateBookController = new UpdateBookController();
const updateBookUseCase = new UpdateBookUseCase(bookRepository);

export { updateBookController, updateBookUseCase };
