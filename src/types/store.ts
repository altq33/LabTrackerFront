import { rootReducer } from "store/reducers";
// eslint-disable-next-line import/named
import { AnyAction } from "redux";
// eslint-disable-next-line import/named
import { ThunkDispatch } from "redux-thunk";
import { Subject, Teacher } from "./api";

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

export interface SubjectState {
  loading: boolean;
  error: null | string;
  subjects: Subject[];
}

export enum TeacherActionsType {
  FETCH_TEACHER = "FETCH_TEACHER",
  ERROR_TEACHER = "ERROR_TEACHER",
  ADD_TEACHER = "ADD_TEACHER",
  DELETE_TEACHER = "DELETE_TEACHER",
  GET_ALL_TEACHERS = "GET_ALL_TEACHERS",
  RESET = "RESET",
}

export enum SubjectActionsType {
  FETCH_SUBJECT = "FETCH_SUBJECT",
  ERROR_SUBJECT = "ERROR_SUBJECT",
  ADD_SUBJECT = "ADD_SUBJECT",
  DELETE_SUBJECT = "DELETE_SUBJECT",
  GET_ALL_SUBJECTS = "GET_ALL_SUBJECTS",
  RESET = "RESET",
}

export interface TeacherFetchAction {
  type: TeacherActionsType.FETCH_TEACHER;
}

export interface TeacherErrorAction {
  type: TeacherActionsType.ERROR_TEACHER;
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

export interface TeacherReset {
  type: TeacherActionsType.RESET;
}

export interface SubjectFetchAction {
  type: SubjectActionsType.FETCH_SUBJECT;
}

export interface SubjectErrorAction {
  type: SubjectActionsType.ERROR_SUBJECT;
  payload: SubjectState["error"];
}

export interface SubjectAddAction {
  type: SubjectActionsType.ADD_SUBJECT;
  payload: Subject;
}

export interface SubjectsGetAllAction {
  type: SubjectActionsType.GET_ALL_SUBJECTS;
  payload: Subject[];
}

export interface SubjectDeleteAction {
  type: SubjectActionsType.DELETE_SUBJECT;
  payload: Subject["id"];
}

export interface SubjectReset {
  type: SubjectActionsType.RESET;
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
  | TeachersGetAction
  | TeacherReset;

export type SubjectAction =
  | SubjectAddAction
  | SubjectDeleteAction
  | SubjectErrorAction
  | SubjectFetchAction
  | SubjectsGetAllAction
  | SubjectReset;

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
