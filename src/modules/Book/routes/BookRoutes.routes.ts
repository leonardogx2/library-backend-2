import { Router } from 'express';
import { createBookController } from '../useCases/CreateBook';
import { deleteBookController } from '../useCases/DeleteBook';
import { getAllBooksController } from '../useCases/GetAllBooks';
import { getBookByIdController } from '../useCases/GetBookById';
import { updateBookController } from '../useCases/UpdateBook';
import { createValidator, updateValidator } from '../schema/validator';

const bookRouter = Router();

bookRouter.get('/', getAllBooksController.handle);
bookRouter.post('/', createValidator, createBookController.handle);
bookRouter.delete('/:id', deleteBookController.handle);
bookRouter.get('/:id', getBookByIdController.handle);
bookRouter.put('/:id', updateValidator, updateBookController.handle);

export { bookRouter };
