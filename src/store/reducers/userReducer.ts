import { initialState } from "store/initialState";
import { UserAction, UserActionsType, UserState } from "types/store";

export const userReducer = (
  state: UserState = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActionsType.REG:
      return { loading: false, error: null, user: action.payload };
    case UserActionsType.LOG:
      return { loading: false, error: null, user: null };
    case UserActionsType.LOGOUT:
      return { loading: false, error: null, user: null };
    case UserActionsType.ERROR:
      return { loading: false, error: action.payload, user: null };
    case UserActionsType.FETCH:
      return { loading: true, error: null, user: null };
    default:
      return state;
  }
};
