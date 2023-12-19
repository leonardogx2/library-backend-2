import { IBookRepository } from '../../infra/types/IBookRepository';
import { IBookFilters } from '../../infra/types/IBookFilters';
import { AppError } from '../../../../shared/errors/AppError';

export class GetAllBooksUseCase {
  constructor(private bookRepo: IBookRepository) {}

  async execute(filters: IBookFilters) {
    const { page, size } = filters;

    if (!page || typeof page !== 'number' || !size || typeof size !== 'number')
      throw new AppError('Page e/ou size inválidos.');

    const books = await this.bookRepo.findAll(filters);
    return books;
  }
}
