import { UserRepositoryInMemory } from '../../infra/repositories/in-memory/UserRepositoryInMemory';
import { LoginUserUseCase } from './LoginUserUseCase';
import dotenv from 'dotenv';

dotenv.config();

const makeSut = async () => {
  const userRepo = new UserRepositoryInMemory();
  await userRepo.generateSeeds();
  const sut = new LoginUserUseCase(userRepo);

  return { userRepo, sut };
};

describe('LoginUserUseCase tests', () => {
  it('should login an user', async () => {
    const { sut } = await makeSut();

    const loginData = {
      email: 'admin@admin.com',
      password: 'admin123',
    };

    const output = await sut.execute(loginData);

    expect(output).toHaveProperty('token');
  });
});
