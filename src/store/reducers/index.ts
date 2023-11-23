import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { teacherReducer } from "./teacherReducer";
import { subjectReducer } from "./subjectReducer";
import { taskReducer } from "./taskReducer";
import storage from "redux-persist/es/storage";
import {
  RootState,
  SubjectAction,
  TaskAction,
  TeacherAction,
  UserAction,
  UserActionsType,
} from "types/store";

export const appReducer = combineReducers({
  user: userReducer,
  teacher: teacherReducer,
  subject: subjectReducer,
  task: taskReducer,
});

export const rootReducer = (
  state: RootState | undefined,
  action: TaskAction | SubjectAction | TeacherAction | UserAction,
) => {
  if (action.type === UserActionsType.LOGOUT) {
    storage.removeItem("persist:root");
    localStorage.removeItem("accessToken");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
