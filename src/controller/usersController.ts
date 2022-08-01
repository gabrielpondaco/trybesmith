import { NextFunction, Request, Response } from 'express';
import authService from '../services/authService';
import usersService from '../services/usersService';

const usersController = {
  async add(req: Request, res:Response, _next: NextFunction) {
    const user = await usersService.validateBody(req.body);
    await usersService.add(user);
    const token = await authService.createToken(user);
    return res.status(201).json({ token });
  },
};

export default usersController;