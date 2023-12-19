import { CreateUserSchema } from './CreateUserSchema';

import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, z } from 'zod';

export class ValidatorSchema {
  execute(schema: AnyZodObject, message = 'Campos não correspondem a requisição') {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.parseAsync(req.body);

        return next();
      } catch (error) {
        let err = error;
        if (err instanceof z.ZodError) {
          err = err.issues.map((e) => ({ path: e.path[0], message: e.message }));
        }
        return res.status(400).json({
          status: message,
          erro: err,
        });
      }
    };
  }
}

const createValidator = new ValidatorSchema().execute(CreateUserSchema, 'Erro ao cadastrar usuário!');

export { createValidator };
