import { AppError } from '../../../../shared/errors/AppError';
import { BookRepositoryInMemory } from '../../../Book/infra/repositories/in-memory/BookRepository';
import { RentRepositoryInMemory } from '../../infra/repositories/in-memory/RentRepository';
import { CreateRentUseCase } from './CreateRentUseCase';

const makeSut = () => {
  const rentRepo = new RentRepositoryInMemory();
  const bookRepo = new BookRepositoryInMemory(true);

  const sut = new CreateRentUseCase(rentRepo, bookRepo);
  return { sut, rentRepo, bookRepo };
};

describe('CreateRentUseCase tests', () => {
  it('should create a rent', async () => {
    const { sut, rentRepo } = makeSut();

    const rent = await sut.execute({
      bookId: 'book-id',
      student_name: 'Leonardo',
      class: 'T40',
      withdrawalDate: '2024-12-14T20:18:55.299Z',
      deliveryDate: '2024-12-15T20:18:55.299Z',
    });

    expect(rent).toBeTruthy();
    expect(rentRepo.rents).toHaveLength(1);
  });

  it('should throw an error if the book does not exists', async () => {
    const { sut } = makeSut();

    try {
      await sut.execute({
        bookId: 'any-id',
        student_name: 'Leonardo',
        class: 'T40',
        withdrawalDate: '2024-12-14T20:18:55.299Z',
        deliveryDate: '2024-12-15T20:18:55.299Z',
      });
      fail();
    } catch (err) {
      expect(err).toBeInstanceOf(AppError);
    }
  });

  it('should throw an error if the withdrawalDate is most recent than deliveryDate', async () => {
    const { sut } = makeSut();

    try {
      await sut.execute({
        bookId: 'book-id',
        student_name: 'Leonardo',
        class: 'T40',
        withdrawalDate: '2024-12-15T20:18:55.299Z',
        deliveryDate: '2024-12-14T20:18:55.299Z',
      });
      fail();
    } catch (err) {
      expect(err).toBeInstanceOf(AppError);
    }
  });

  it('should throw an error if the withdrawalDate is old', async () => {
    const { sut } = makeSut();

    try {
      await sut.execute({
        bookId: 'book-id',
        student_name: 'Leonardo',
        class: 'T40',
        withdrawalDate: '2023-11-14T20:18:55.299Z',
        deliveryDate: '2024-12-15T20:18:55.299Z',
      });
      fail();
    } catch (err) {
      expect(err).toBeInstanceOf(AppError);
    }
  });
});
