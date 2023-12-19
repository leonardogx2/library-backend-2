import { Request, Response } from 'express';
import { AppError } from '../../../../shared/errors/AppError';
import { deleteBookUseCase } from '.';

export class DeleteBookController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await deleteBookUseCase.execute(id);
      return res.status(204).end();
    } catch (err) {
      console.log(err);
      if (err instanceof AppError) return res.status(400).json({ message: err.message, error: err.statusCode });
      return res.status(500).json({ message: 'Erro no servidor', error: 500 });
    }
  }
}
