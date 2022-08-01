import { NextFunction, Request, Response } from 'express';
import { Users } from '../interfaces';
import authService from '../services/authService';
import usersService from '../services/usersService';

const usersController = {
  async add(req: Request, res:Response, _next: NextFunction) {
    const user = req.body as Users;
    await usersService.add(user);
    const token = await authService.createToken(user);
    return res.status(201).json({ token });
  },
};

export default usersController;