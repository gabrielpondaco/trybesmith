import { NextFunction, Request, Response } from 'express';
import usersModel from '../models/usersModel';
import authService from '../services/authService';
import loginService from '../services/loginService';

const loginController = {
  async login(req: Request, res:Response, _next: NextFunction) {
    const loginBody = await loginService.validateBody(req.body);
    const userExists = await usersModel.get(loginBody);
    if (!userExists) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    const token = await authService.createToken(loginBody);
    return res.status(200).json({ token });
  },
};

export default loginController;