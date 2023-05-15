import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { User } from "../entities/authentication/User";
import { UserRepositoryInterface } from "../entities/authentication/UserRespositoryInterface";
import env from "../config/env";
import { HttpError } from "../errors/HttpError";
import { NotFoundError } from "../errors/NotFoundError";

export class AuthenticationService {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new HttpError(401, "Invalid email or password");
    }
    const token = sign({ sub: user.id }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRATION_TIME });
    return token;
  }

  async register(data: User): Promise<string> {
    const existingUser = await this.userRepository.getUserByEmail(data.email);
    if (existingUser) {
      throw new HttpError(409, "Email already in use");
    }
    const user = await this.userRepository.createUser(data);
    const token = sign({ sub: user.id }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRATION_TIME });
    return token;
  }
}