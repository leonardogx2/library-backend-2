import { ICreateBookDTO } from '../../dtos/ICreateBookDTO';
import { BookRepositoryInMemory } from '../../infra/repositories/in-memory/BookRepository';
import { CreateBookUseCase } from './CreateBookUseCase';

const makeSut = () => {
  const bookRepo = new BookRepositoryInMemory();
  const sut = new CreateBookUseCase(bookRepo);
  return { bookRepo, sut };
};

describe('CreateBookUseCase tests', () => {
  it('should create a book', async () => {
    const { sut, bookRepo } = makeSut();

    const bookData: ICreateBookDTO = {
      title: 'Random book title',
      img: 'random_img.png',
      author: 'Author',
      genre: 'Romance',
      synopsis: 'Random synopsis',
      systemEntryDate: new Date(),
    };
    const book = await sut.execute(bookData);

    expect(book).toBeTruthy();
    expect(bookRepo.books).toHaveLength(1);
  });
});
