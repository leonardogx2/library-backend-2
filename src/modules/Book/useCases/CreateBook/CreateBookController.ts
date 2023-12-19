import { createBookUseCase } from '.';
import { AppError } from '../../../../shared/errors/AppError';
import { Request, Response } from 'express';
import { ICreateBookDTO } from '../../dtos/ICreateBookDTO';

export class CreateBookController {
  async handle(req: Request, res: Response) {
    const bookData: ICreateBookDTO = req.body;
    bookData.systemEntryDate = new Date(bookData.systemEntryDate);

    try {
      const output = await createBookUseCase.execute(bookData);
      return res.json(output);
    } catch (err) {
      console.log(err);
      if (err instanceof AppError) {
        return res.status(400).json({ message: err.message, error: err.statusCode });
      }
      return res.status(500).json({ message: 'Erro no servidor', error: 500 });
    }
  }
}
