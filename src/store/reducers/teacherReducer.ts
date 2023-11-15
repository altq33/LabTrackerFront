import { initialTeachersState } from "store/initialState";
import { TeacherAction, TeacherActionsType, TeacherState } from "types/store";

export const teacherReducer = (
  state: TeacherState = initialTeachersState,
  action: TeacherAction,
): TeacherState => {
  switch (action.type) {
    case TeacherActionsType.ERROR_TEACHER:
      return { ...state, error: action.payload };
    case TeacherActionsType.FETCH_TEACHER:
      return { ...state, loading: true, error: null };
    case TeacherActionsType.ADD_TEACHER:
      return {
        error: null,
        loading: false,
        teachers: [...state.teachers, action.payload],
      };
    case TeacherActionsType.DELETE_TEACHER:
      return {
        ...state,
        error: null,
        loading: false,
        teachers: state.teachers.filter(
          (teacher) => teacher.id !== action.payload,
        ),
      };
    case TeacherActionsType.GET_ALL_TEACHERS:
      return { error: null, loading: false, teachers: action.payload };
    case TeacherActionsType.RESET:
      return initialTeachersState;
    default:
      return state;
  }
};
