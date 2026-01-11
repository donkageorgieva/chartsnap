import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../errors/http-error';

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error(err);
  return res.status(500).json({ error: 'Unexpected server error' });
};
