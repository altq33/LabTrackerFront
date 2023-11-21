import { initialTaskState } from "store/initialState";
import { TaskAction, TaskActionsType, TaskState } from "types/store";

export const taskReducer = (
  state: TaskState = initialTaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case TaskActionsType.ERROR_TASK:
      return { ...state, error: action.payload };
    case TaskActionsType.FETCH_TASK:
      return { ...state, loading: true, error: null };
    case TaskActionsType.ADD_TASK:
      return {
        error: null,
        loading: false,
        tasks: [...state.tasks, action.payload],
      };
    case TaskActionsType.UPDATE_TASK:
      return {
        ...state,
        error: null,
        loading: false,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    case TaskActionsType.DELETE_TASK:
      return {
        ...state,
        error: null,
        loading: false,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TaskActionsType.GET_ALL_TASKS:
      return { error: null, loading: false, tasks: action.payload };
    case TaskActionsType.RESET:
      return initialTaskState;
    default:
      return state;
  }
};
