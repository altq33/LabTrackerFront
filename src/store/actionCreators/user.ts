/* eslint-disable import/named */
import { $api } from "../../http/index";
import { Dispatch } from "redux";
import { UserReg, UserRegResponse } from "types/api";
import { UserAction, UserActionsType } from "types/store";

export const registration = (data: UserReg) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionsType.FETCH });
      const response = await $api.post<UserRegResponse>("/users", data);
      dispatch({ type: UserActionsType.REG, payload: response.data });
    } catch (e) {
      dispatch({ type: UserActionsType.ERROR, payload: "Registration error" });
    }
  };
};
