import { Request, Response } from 'express';
import { getAllBooksUseCase } from '.';
import { AppError } from '../../../../shared/errors/AppError';
import { IBookFilters } from '../../infra/types/IBookFilters';

export class GetAllBooksController {
  async handle(req: Request, res: Response) {
    const { page, size, title } = req.query as IBookFilters;

    const filters: IBookFilters = {
      page: parseInt(page ? (page as unknown as string) : '1'),
      size: parseInt(size ? (size as unknown as string) : '1'),
      title,
    };

    try {
      const books = await getAllBooksUseCase.execute(filters);
      return res.json(books);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ message: err.message, error: err.statusCode });
    }
  }
}
