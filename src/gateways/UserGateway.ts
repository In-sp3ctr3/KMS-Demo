import bcrypt from "bcrypt";
import { pool } from "../config";
import { User } from "../entities/authentication/User";
import { UserRepositoryInterface } from "../entities/authentication/UserRespositoryInterface";

export class UserGateway implements UserRepositoryInterface {
  async getUserByEmail(email: string): Promise<User | null> {
    const client = await pool.connect();
    try {
      const result = await client.query("SELECT * FROM users WHERE email = $1", [email]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          createdAt: user.created_at,
          updatedAt: user.updated_at,
        };
      } else {
        return null;
      }
    } finally {
      client.release();
    }
  }

  async createUser(data: User): Promise<User> {
    const client = await pool.connect();
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const result = await client.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
        [data.name, data.email, hashedPassword]
      );
      const user = result.rows[0];
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
      };
    } finally {
      client.release();
    }
  }
}