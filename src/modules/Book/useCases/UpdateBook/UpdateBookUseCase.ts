import { AppError } from '../../../../shared/errors/AppError';
import { IUpdateBookDTO } from '../../dtos/IUpdateBookDTO';
import { IBookRepository } from '../../infra/types/IBookRepository';

export class UpdateBookUseCase {
  constructor(private bookRepository: IBookRepository) {}

  async execute(updateData: IUpdateBookDTO) {
    const book = await this.bookRepository.findById(updateData.id);
    if (!book) throw new AppError('Livro não encontrado.');

    const updatedBook = await this.bookRepository.update(updateData);
    return updatedBook;
  }
}
