import { User } from '../../User';

export interface IUserRepositoryInterface {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  getAll(): Promise<User[]>;
}
