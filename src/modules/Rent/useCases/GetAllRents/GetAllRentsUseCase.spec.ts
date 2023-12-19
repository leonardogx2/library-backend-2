import { RentRepositoryInMemory } from '../../infra/repositories/in-memory/RentRepository';
import { GetAllRentsUseCase } from './GetAllRentsUseCase';

const makeSut = () => {
  const rentRepo = new RentRepositoryInMemory(true);
  const sut = new GetAllRentsUseCase(rentRepo);

  return { rentRepo, sut };
};

describe('GetAllRentsUseCase tests', () => {
  it('should get all rents', async () => {
    const { sut } = makeSut();
    const filters = {
      page: 1,
      size: 1,
    };

    const rents = await sut.execute(filters);

    expect(rents).toHaveLength(1);
  });
});
