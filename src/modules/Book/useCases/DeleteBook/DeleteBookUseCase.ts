import { AppError } from '../../../../shared/errors/AppError';
import { IBookRepository } from '../../infra/types/IBookRepository';

export class DeleteBookUseCase {
  constructor(private bookRepo: IBookRepository) {}

  async execute(bookId: string) {
    const bookExists = await this.bookRepo.findById(bookId);
    if (!bookExists) throw new AppError('Livro não encontrado.');

    await this.bookRepo.delete(bookId);
    return;
  }
}
