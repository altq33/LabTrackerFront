import { initialUserState } from "store/initialState";
import { UserAction, UserActionsType, UserState } from "types/store";

export const userReducer = (
  state: UserState = initialUserState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActionsType.LOG:
      return {
        loading: false,
        error: null,
        user: action.payload,
        success: true,
      };
    case UserActionsType.LOGOUT:
      return {
        loading: false,
        error: null,
        user: null,
        success: true,
      };
    case UserActionsType.ERROR:
      return {
        loading: false,
        error: action.payload,
        user: null,
        success: false,
      };
    case UserActionsType.FETCH:
      return { loading: true, error: null, user: null, success: false };
    default:
      return state;
  }
};
