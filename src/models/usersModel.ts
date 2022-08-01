import { OkPacket, RowDataPacket } from 'mysql2';
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

  async get(user: Omit<Users, 'classe' | 'level'>) {
    const { username, password } = user;
    const [[userExist]] = await connection.execute<RowDataPacket[]>(`SELECT * FROM Trybesmith.Users
    WHERE username = ? AND password = ?;`, [username, password]);
    return userExist;
  },

  async getId(user: Omit<Users, 'classe' | 'level'>) {
    const { username, password } = user;
    const [[userId]] = await connection.execute<RowDataPacket[]>(`SELECT id FROM Trybesmith.Users
    WHERE username = ? AND password = ?;`, [username, password]);
    return userId.id;
  },
};

export default usersModel;