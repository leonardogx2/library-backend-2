import { prisma } from '../../../../../shared/database/prisma';
import { User } from '../../../User';
import { IUserRepositoryInterface } from '../../types/IUserRepository';

export class UserRepositoryPrisma implements IUserRepositoryInterface {
  async create(user: User) {
    await prisma.user.create({ data: user });
    return user;
  }

  async getAll() {
    return await prisma.user.findMany();
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({ where: { email } });

    return user;
  }
}
