import { TeacherState, UserState } from "types/store";

export const initialUserState: UserState = {
  user: null,
  loading: false,
  error: null,
  success: false,
};

export const initialTeachersState: TeacherState = {
  error: null,
  loading: false,
  teachers: [],
};
