import { AppError } from '../../../../shared/errors/AppError';
import { IUpdateBookDTO } from '../../dtos/IUpdateBookDTO';
import { BookRepositoryInMemory } from '../../infra/repositories/in-memory/BookRepository';
import { UpdateBookUseCase } from './UpdateBookUseCase';

const makeSut = () => {
  const bookRepo = new BookRepositoryInMemory(true);
  const sut = new UpdateBookUseCase(bookRepo);

  return { sut, bookRepo };
};

describe('UpdateBookUseCase tests', () => {
  it('should update title of a book', async () => {
    const { sut } = makeSut();
    const updateData: IUpdateBookDTO = {
      id: 'book-id',
      title: 'Updated title',
    };

    const updatedBook = await sut.execute(updateData);

    expect(updatedBook.title).toBe('Updated title');
  });

  it('should throw an error if the book does not exists', async () => {
    const { sut } = makeSut();

    const updateData: IUpdateBookDTO = {
      id: 'any-book-id',
      title: 'Updated title',
    };

    try {
      await sut.execute(updateData);
    } catch (err) {
      expect(err).toBeInstanceOf(AppError);
    }
  });
});
