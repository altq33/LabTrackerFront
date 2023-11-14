import { rootReducer } from "store/reducers";
import { UserRegResponse } from "./api";

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
  FETCH = "FETCH",
  ERROR = "ERROR",
}

export interface RegAction {
  type: UserActionsType.REG;
  payload: UserRegResponse;
}

export interface LogAction {
  type: UserActionsType.LOG;
}

export interface LogoutAction {
  type: UserActionsType.LOGOUT;
}

export interface FetchAction {
  type: UserActionsType.FETCH;
}

export interface ErrorAction {
  type: UserActionsType.ERROR;
  payload: string;
}

export type UserAction =
  | RegAction
  | LogAction
  | LogoutAction
  | FetchAction
  | ErrorAction;

export type RootState = ReturnType<typeof rootReducer>;
