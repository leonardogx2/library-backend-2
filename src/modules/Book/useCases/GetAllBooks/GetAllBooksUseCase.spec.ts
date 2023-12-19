import { BookRepositoryInMemory } from '../../infra/repositories/in-memory/BookRepository';
import { IBookFilters } from '../../infra/types/IBookFilters';
import { GetAllBooksUseCase } from './GetAllBooksUseCase';

const makeSut = () => {
  const bookRepository = new BookRepositoryInMemory(true);
  const sut = new GetAllBooksUseCase(bookRepository);

  return { sut, bookRepository };
};

describe('GetAllBooksUseCase tests', () => {
  it('should get all books with page & size', async () => {
    const { sut } = makeSut();
    const filters: IBookFilters = {
      page: 1,
      size: 1,
    };

    const output = await sut.execute(filters);

    expect(output.books).toHaveLength(1);
    expect(output.total).toBe(1);
  });
});
