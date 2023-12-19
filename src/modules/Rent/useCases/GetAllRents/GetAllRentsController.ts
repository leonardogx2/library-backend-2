import { Request, Response } from 'express';
import { IRentFilters } from '../../infra/repositories/types/IRentRepository';
import { AppError } from '../../../../shared/errors/AppError';
import { getAllRentsUseCase } from '.';

export class GetAllRentsController {
  async handle(req: Request, res: Response) {
    const { page, size } = req.query;

    const filters: IRentFilters = {
      page: parseInt(page ? (page as unknown as string) : '1'),
      size: parseInt(size ? (size as unknown as string) : '1'),
    };

    try {
      const rents = await getAllRentsUseCase.execute(filters);
      return res.json(rents);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ message: err.message, error: err.statusCode });
      return res.status(500).json({ message: 'Erro no servidor', error: 500 });
    }
  }
}
