import { AppError } from '../../../../shared/errors/AppError';
import { IBookRepository } from '../../infra/types/IBookRepository';

export class GetBookByIdUseCase {
  constructor(private bookRepo: IBookRepository) {}

  async execute(bookId: string) {
    const book = await this.bookRepo.findById(bookId);
    if (!book) throw new AppError('Livro não encontrado.');

    return book;
  }
}
