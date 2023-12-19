import { Request, Response } from 'express';
import { AppError } from '../../../../shared/errors/AppError';
import { createRentUseCase } from '.';

export class CreateRentController {
  async handle(req: Request, res: Response) {
    const rentData = req.body;

    try {
      const output = await createRentUseCase.execute(rentData);
      return res.json(output);
    } catch (err) {
      if (err instanceof AppError) return res.status(400).json({ message: err.message, error: err.statusCode });
      return res.status(500).json({ message: 'Erro no servidor', error: 500 });
    }
  }
}
