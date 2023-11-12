export interface User {
  email: string;
  username: string;
  created: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: null | string;
}

export enum UserActionsType {
  REG = "REG",
  LOG = "LOG",
  LOGOUT = "LOGOUT",
}

export interface RegAction {
  type: UserActionsType.REG;
}

export interface LogAction {
  type: UserActionsType.LOG;
}

export interface LogoutAction {
  type: UserActionsType.LOGOUT;
}

export type UserAction = RegAction | LogAction | LogoutAction;
