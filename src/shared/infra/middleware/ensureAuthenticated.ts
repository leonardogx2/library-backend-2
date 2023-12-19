import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Usuário inválido.' });

  try {
    jwt.verify(token, process.env.TOKEN_SECRET as string);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Usuário inválido.' });
  }
}
