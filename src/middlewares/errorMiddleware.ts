import { NextFunction, Request, Response } from 'express';

const errors: Record<string, number> = {
  ValidationError: 400,
};

const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let status = errors[err.name];
  const { message } = err;
  if (message.includes('length') || message.includes('must')) {
    status = 422;
  }
  if (message.toLowerCase().includes('token')) status = 401;
  if (!status) return res.sendStatus(500);
  res.status(status).json({ message: err.message });
};

export default errorMiddleware;