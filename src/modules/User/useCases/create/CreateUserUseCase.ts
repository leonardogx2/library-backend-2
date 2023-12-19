import { IUserRepositoryInterface } from '../../infra/types/IUserRepository';
import { User } from '../../User';
import bcrypt from 'bcrypt';

interface CreateUserData {
  email: string;
  name: string;
  password: string;
}

interface CreateUserOutput {
  user: {
    email: string;
    name: string;
    password: string;
    id: string;
  };
}

export class CreateUserUseCase {
  constructor(private userRepo: IUserRepositoryInterface) {}

  async execute(data: CreateUserData): Promise<CreateUserOutput> {
    const passwordHash = await bcrypt.hash(data.password, 10);
    data.password = passwordHash;
    const user = new User(data);
    this.userRepo.create(user);
    return { user };
  }
}
