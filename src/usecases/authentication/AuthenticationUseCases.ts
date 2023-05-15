import { User } from "../../entities/authentication/User";
import { UserRepositoryInterface } from "../../entities/authentication/UserRespositoryInterface";
import { AuthenticationService } from "../../services/AuthenticationService";

export class AuthenticationUseCases {
  private authenticationService: AuthenticationService;

  constructor(userRepository: UserRepositoryInterface) {
    this.authenticationService = new AuthenticationService(userRepository);
  }

  async login(email: string, password: string): Promise<string> {
    const token = await this.authenticationService.login(email, password);
    return token;
  }

  async register(data: User): Promise<string> {
    const token = await this.authenticationService.register(data);
    return token;
  }
}