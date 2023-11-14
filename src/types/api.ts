export interface UserReg {
  username: string;
  email: string;
  password: string;
}

export interface UserRegResponse {
  username: string;
  email: string;
  created: string;
}
