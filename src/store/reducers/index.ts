import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { teacherReducer } from "./teacherReducer";
import { subjectReducer } from "./subjectReducer";
import { taskReducer } from "./taskReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  teacher: teacherReducer,
  subject: subjectReducer,
  task: taskReducer,
});
