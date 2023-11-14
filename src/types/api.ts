import { User } from "./store";

export interface UserLog {
  username: string;
  password: string;
}

export interface UserRegResponse {
  username: string;
  email: string;
  password: string;
}

export interface UserLogResponse {
  access_token: string;
  tokenType: string;
  user: User;
}
