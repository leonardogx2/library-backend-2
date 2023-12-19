import jwt from 'jsonwebtoken';
import { AppError } from '../../../../shared/errors/AppError';
import { ILoginUserDTO } from '../../dtos/ILoginUserDTO';
import { IUserRepositoryInterface } from '../../infra/types/IUserRepository';
import bcrypt from 'bcrypt';

export class LoginUserUseCase {
  constructor(private userRepo: IUserRepositoryInterface) {}

  async execute(loginData: ILoginUserDTO) {
    const user = await this.userRepo.findByEmail(loginData.email);

    if (!user) throw new AppError('Credenciais inválidas.');

    try {
      await bcrypt.compare(loginData.password, user.password);
      const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, process.env.TOKEN_SECRET as string, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return { token, name: user.name, email: user.email };
    } catch (err) {
      console.log(err);
      throw new AppError('Credenciais inválidas.');
    }
  }
}
