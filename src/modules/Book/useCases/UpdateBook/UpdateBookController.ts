import { Request, Response } from 'express';
import { AppError } from '../../../../shared/errors/AppError';
import { updateBookUseCase } from '.';

export class UpdateBookController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const updateData = req.body;
    updateData.id = id;

    try {
      const output = await updateBookUseCase.execute(updateData);
      return res.json(output);
    } catch (err) {
      if (err instanceof AppError) return res.status(err.statusCode).json({ message: err.message });
    }
  }
}
