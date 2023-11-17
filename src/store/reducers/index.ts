import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { teacherReducer } from "./teacherReducer";
import { subjectReducer } from "./subjectReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  teacher: teacherReducer,
  subject: subjectReducer,
});
