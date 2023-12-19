import { Book } from '../../Book';
import { ICreateBookDTO } from '../../dtos/ICreateBookDTO';
import { IUpdateBookDTO } from '../../dtos/IUpdateBookDTO';
import { IBookFilters } from './IBookFilters';

export interface IBookRepository {
  create(bookData: ICreateBookDTO): Promise<Book>;
  update(bookData: IUpdateBookDTO): Promise<Book>;
  findById(bookId: string): Promise<Book | null>;
  findAll(filters: IBookFilters): Promise<{ books: Book[]; total: number }>;
  delete(bookId: string): Promise<void>;
}
