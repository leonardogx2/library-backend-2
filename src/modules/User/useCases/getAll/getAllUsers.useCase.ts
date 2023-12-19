import { IUserRepositoryInterface } from '../../infra/types/IUserRepository';

export class GetUsersUseCase {
  constructor(private userRepo: IUserRepositoryInterface) {}

  async execute() {
    const users = await this.userRepo.getAll();
    console.log(users);
    return { users };
  }
}
