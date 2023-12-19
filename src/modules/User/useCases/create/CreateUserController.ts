import { Request, Response } from 'express';
import { createUserUseCase } from '.';
class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
    });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
