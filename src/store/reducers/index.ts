import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { teacherReducer } from "./teacherReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  teacher: teacherReducer,
});
