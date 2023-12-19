import { Request, Response } from 'express';
import { AppError } from '../../../../shared/errors/AppError';
import { loginUserUseCase } from '.';

export class LoginUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const output = await loginUserUseCase.execute({ email, password });
      return res.json(output);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ message: err.message, error: err.statusCode });
    }
  }
}
