/* eslint-disable import/named */
import { $api } from "../../http/index";
import { Dispatch } from "redux";
import { UserLog, UserLogResponse } from "types/api";
import { User, UserAction, UserActionsType } from "types/store";

export const login = (data: UserLog) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionsType.FETCH });
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("password", data.password);
      const response = await $api.post<UserLogResponse>(
        "/users/auth",
        formData,
      );
      localStorage.setItem("accessToken", response.data.access_token);
      dispatch({
        type: UserActionsType.LOG,
        payload: response.data.user,
      });
    } catch (e) {
      dispatch({
        type: UserActionsType.ERROR,
        payload: "Incorrect login or password",
      });
    }
  };
};

export const refresh = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await $api.get<User>("/users/me");

      dispatch({
        type: UserActionsType.LOG,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionsType.ERROR,
        payload: "Unauthorized",
      });
    }
  };
};
