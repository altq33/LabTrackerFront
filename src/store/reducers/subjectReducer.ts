import { initialSubjectsState } from "store/initialState";
import { SubjectAction, SubjectActionsType, SubjectState } from "types/store";

export const subjectReducer = (
  state: SubjectState = initialSubjectsState,
  action: SubjectAction,
): SubjectState => {
  switch (action.type) {
    case SubjectActionsType.ERROR_SUBJECT:
      return { ...state, error: action.payload };
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
    case SubjectActionsType.GET_ALL_SUBJECTS:
      return { error: null, loading: false, subjects: action.payload };
    case SubjectActionsType.RESET:
      return initialSubjectsState;
    default:
      return state;
  }
};
