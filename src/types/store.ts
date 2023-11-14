import { rootReducer } from "store/reducers";
// eslint-disable-next-line import/named
import { AnyAction } from "redux";
// eslint-disable-next-line import/named
import { ThunkDispatch } from "redux-thunk";

export interface User {
  email: string;
  username: string;
  created: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: null | string;
  success: boolean;
}

export enum UserActionsType {
  LOG = "LOG",
  LOGOUT = "LOGOUT",
  FETCH = "FETCH",
  ERROR = "ERROR",
}

export interface LogAction {
  type: UserActionsType.LOG;
  payload: User;
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

export type UserAction = LogAction | LogoutAction | FetchAction | ErrorAction;

export type RootState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppDispatch = ThunkDispatch<UserState, any, AnyAction>;
