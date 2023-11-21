import { SubjectState, TaskState, TeacherState, UserState } from "types/store";

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

export const initialSubjectsState: SubjectState = {
  loading: false,
  error: null,
  subjects: [],
};

export const initialTaskState: TaskState = {
  loading: false,
  error: null,
  tasks: [],
};
