import { initialSubjectsState } from "store/initialState";
import { SubjectAction, SubjectActionsType, SubjectState } from "types/store";

export const subjectReducer = (
  state: SubjectState = initialSubjectsState,
  action: SubjectAction,
): SubjectState => {
  switch (action.type) {
    case SubjectActionsType.ERROR_SUBJECT:
      return { ...state, loading: false, error: action.payload };
    case SubjectActionsType.FETCH_SUBJECT:
      return { ...state, loading: true, error: null };
    case SubjectActionsType.ADD_SUBJECT:
      return {
        error: null,
        loading: false,
        subjects: [...state.subjects, action.payload],
      };
    case SubjectActionsType.DELETE_SUBJECT:
      return {
        ...state,
        error: null,
        loading: false,
        subjects: state.subjects.filter(
          (subject) => subject.id !== action.payload,
        ),
      };
    case SubjectActionsType.UPDATE_TASK_COUNT:
      return {
        ...state,
        subjects: state.subjects.map((subject) =>
          subject.id == action.payload
            ? { ...subject, tasks_count: (subject.tasks_count ?? 0) + 1 }
            : subject,
        ),
      };
    case SubjectActionsType.GET_ALL_SUBJECTS:
      return { error: null, loading: false, subjects: action.payload };
    case SubjectActionsType.RESET:
      return initialSubjectsState;
    default:
      return state;
  }
};
