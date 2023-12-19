import { User } from '../../../User';
import { IUserRepositoryInterface } from '../../types/IUserRepository';
import bcrypt from 'bcrypt';

export class UserRepositoryInMemory implements IUserRepositoryInterface {
  private users: User[] = [];

  async create(user: User) {
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);

    if (user) return user;
    return null;
  }

  async getAll() {
    return this.users;
  }

  async generateSeeds() {
    this.users.push({
      id: 'user-id',
      name: 'Admin',
      email: 'admin@admin.com',
      password: await bcrypt.hash('admin123', 10),
    });
  }
}
