import { initialState } from "store/initialState";
import { UserAction, UserActionsType, UserState } from "types/store";

export const userReducer = (
  state: UserState = initialState,
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
      localStorage.removeItem("persist:root");
      localStorage.removeItem("accessToken");
      return { loading: false, error: null, user: null, success: false };
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
