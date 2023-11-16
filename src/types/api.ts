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

export interface Teacher {
  id: string;
  name: string;
  surname: string;
  father_name: string | null;
  phone_number: string | null;
}
