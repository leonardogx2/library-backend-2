import { AppError } from '../../../../shared/errors/AppError';
import { BookRepositoryInMemory } from '../../infra/repositories/in-memory/BookRepository';
import { DeleteBookUseCase } from './DeleteBookUseCase';

const makeSut = () => {
  const bookRepo = new BookRepositoryInMemory(true);
  const sut = new DeleteBookUseCase(bookRepo);
  return { bookRepo, sut };
};

describe('DeleteBookUseCase tests', () => {
  it('should delete a book', async () => {
    const { sut, bookRepo } = makeSut();

    await sut.execute('book-id');

    expect(bookRepo.books).toHaveLength(0);
  });

  it('should throw an error if the book does not exists', async () => {
    const { sut } = makeSut();

    try {
      await sut.execute('any-book-id');
      fail();
    } catch (err) {
      expect(err).toBeInstanceOf(AppError);
    }
  });
});
