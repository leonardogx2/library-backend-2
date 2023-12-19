import { Request, Response } from 'express';
import { AppError } from '../../../../shared/errors/AppError';
import { getBookByIdUseCase } from '.';

export class GetBookByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const output = await getBookByIdUseCase.execute(id);
      return res.json(output);
    } catch (err) {
      if (err instanceof AppError) return res.status(400).json({ message: err.message, error: err.statusCode });
    }
  }
}
