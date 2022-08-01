import { NextFunction, Request, Response } from 'express';

const errors: Record<string, number> = {
  ValidationError: 400,
  NotFoundError: 401,
};

const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let status = errors[err.name];
  if (err.message.includes('length') || err.message.includes('must')) {
    status = 422;
  }
  if (!status) return res.sendStatus(500);
  res.status(status).json({ message: err.message });
};

export default errorMiddleware;