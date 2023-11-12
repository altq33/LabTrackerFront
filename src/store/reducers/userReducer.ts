import { initialState } from "store/initialState";
import { UserAction, UserActionsType, UserState } from "types/store";

export const userReducer = (
  state: UserState = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActionsType.REG:
      return { loading: true, error: null, user: null };
    case UserActionsType.LOG:
      return { loading: true, error: null, user: null };
    case UserActionsType.LOGOUT:
      return { loading: true, error: null, user: null };
    default:
      return state;
  }
};
