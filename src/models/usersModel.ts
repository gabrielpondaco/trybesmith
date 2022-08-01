import { OkPacket } from 'mysql2';
import connection from './connection';
import { Users } from '../interfaces/index';

const usersModel = {
  async add(user: Users) {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await connection
      .execute<OkPacket>(`INSERT INTO Trybesmith.Users(username, classe, level, password) 
    VALUES(?, ?, ?, ?);`, [username, classe, level, password]);
    return insertId;
  },
};

export default usersModel;