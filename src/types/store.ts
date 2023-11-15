import { rootReducer } from "store/reducers";
// eslint-disable-next-line import/named
import { AnyAction } from "redux";
// eslint-disable-next-line import/named
import { ThunkDispatch } from "redux-thunk";
import { Teacher } from "./api";

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

export interface TeacherState {
  loading: boolean;
  error: null | string;
  teachers: Teacher[];
}

export enum TeacherActionsType {
  FETCH = "FETCH",
  ERROR = "ERROR",
  ADD_TEACHER = "ADD_TEACHER",
  DELETE_TEACHER = "DELETE_TEACHER",
  GET_ALL_TEACHERS = "GET_ALL_TEACHERS",
}

export interface TeacherFetchAction {
  type: TeacherActionsType.FETCH;
}

export interface TeacherErrorAction {
  type: TeacherActionsType.ERROR;
  payload: TeacherState["error"];
}

export interface TeacherAddAction {
  type: TeacherActionsType.ADD_TEACHER;
  payload: Teacher;
}

export interface TeachersGetAction {
  type: TeacherActionsType.GET_ALL_TEACHERS;
  payload: Teacher[];
}

export interface TeacherDeleteAction {
  type: TeacherActionsType.DELETE_TEACHER;
  payload: Teacher["id"];
}

export enum UserActionsType {
  LOG = "LOG",
  LOGOUT = "LOGOUT",
  FETCH = "FETCH",
  ERROR = "ERROR",
}

export type TeacherAction =
  | TeacherAddAction
  | TeacherDeleteAction
  | TeacherErrorAction
  | TeacherFetchAction
  | TeachersGetAction;

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
