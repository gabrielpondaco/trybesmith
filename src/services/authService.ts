import jwt, { JwtPayload } from 'jsonwebtoken';
import { TokenInterface } from '../interfaces';

const authService = {
  async createToken(payload: JwtPayload) {
    const secret = 'suaSenhaSecreta';
    const token = jwt.sign({ data: payload }, secret);
    return token;
  },

  async validateToken(token: string) {
    try {
      const secret = 'suaSenhaSecreta';
      const decoded = jwt.verify(token, secret);    
      return decoded as TokenInterface;
    } catch (error) {
      throw new Error('Invalid token');
    }
  },
};

export default authService;