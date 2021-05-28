import BaseService from "./index";
import { API_BASE } from "@env";

interface AuthProps {
  token: string;
}

export interface User {
  id: number;
  email: string;
  cpf: string;
  firstName: string;
  lastName: string;
  cellphone: string;
  birthDate: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
}

interface SignInBody {
  email?: string;
  password?: string;
}

interface SignInResponse {
  accessToken: string;
  authentication: object;
  user: User;
}

export const API_ROUTES = {
  auth: "/authentication",
};

export class AuthService extends BaseService {
  constructor() {
    super();
    this.create(API_BASE);
  }

  async fakeCheckEmail(): Promise<boolean> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(false);
      }, 1000);
    });
  }

  async signIn(body: SignInBody): Promise<SignInResponse | undefined> {
    const response = await this.post(API_ROUTES.auth, {
      strategy: "local",
      ...body,
    });

    return response;
  }
}

export const createAuthService = () => new AuthService();
