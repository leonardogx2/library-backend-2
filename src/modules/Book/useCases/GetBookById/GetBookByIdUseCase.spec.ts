import { AppError } from '../../../../shared/errors/AppError';
import { BookRepositoryInMemory } from '../../infra/repositories/in-memory/BookRepository';
import { GetBookByIdUseCase } from './GetBookByIdUseCase';

const makeSut = () => {
  const bookRepo = new BookRepositoryInMemory(true);
  const sut = new GetBookByIdUseCase(bookRepo);

  return { bookRepo, sut };
};

describe('GetBookByIdUseCase tests', () => {
  it('should get a book by id', async () => {
    const { sut } = makeSut();

    const book = await sut.execute('book-id');

    expect(book).toHaveProperty('id');
  });

  it('should throw an error if the book does not exists', async () => {
    const { sut } = makeSut();

    try {
      await sut.execute('any-book-id');
    } catch (err) {
      expect(err).toBeInstanceOf(AppError);
    }
  });
});
