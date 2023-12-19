import { BookRepository } from '../../infra/repositories/prisma/BookRepository';
import { DeleteBookController } from './DeleteBookController';
import { DeleteBookUseCase } from './DeleteBookUseCase';

const bookRepository = new BookRepository();

const deleteBookController = new DeleteBookController();
const deleteBookUseCase = new DeleteBookUseCase(bookRepository);

export { deleteBookController, deleteBookUseCase };
