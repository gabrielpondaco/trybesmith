import jwt, { JwtPayload } from 'jsonwebtoken';

const authService = {
  async createToken(payload: JwtPayload) {
    const secret = 'suaSenhaSecreta';
    const token = jwt.sign({ data: payload }, secret);
    return token;
  },
};

export default authService;