import { UserRepositoryInMemory } from '../../infra/repositories/in-memory/UserRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';

const repository = new UserRepositoryInMemory();
const createUseCase = new CreateUserUseCase(repository);

describe('CreateUserUseCase tests', () => {
  it('should create and return an user', async () => {
    const user = {
      email: 'leonardo@gmail.com',
      name: 'Leonardo',
      password: '12345678',
    };
    const output = createUseCase.execute(user);
    expect(output).toBeTruthy();
  });
});
