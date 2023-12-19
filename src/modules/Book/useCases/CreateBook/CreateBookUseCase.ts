import { ICreateBookDTO } from '../../dtos/ICreateBookDTO';
import { IBookRepository } from '../../infra/types/IBookRepository';

export class CreateBookUseCase {
  constructor(private bookRepo: IBookRepository) {}

  async execute(bookData: ICreateBookDTO) {
    const book = await this.bookRepo.create(bookData);
    return book;
  }
}
