import { Request, Response } from 'express';
import { getUserUseCase } from '.';

class GetUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const users = await getUserUseCase.execute();

    return res.status(201).json({ users });
  }
}

export { GetUserController };
