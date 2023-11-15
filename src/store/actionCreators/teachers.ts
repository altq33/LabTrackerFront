/* eslint-disable import/named */
import { AxiosError } from "axios";
import { $api } from "http/index";
import { Dispatch } from "redux";
import { Teacher } from "types/api";
import { TeacherAction, TeacherActionsType } from "types/store";

export const getAllTeachers = () => {
  return async (dispatch: Dispatch<TeacherAction>) => {
    try {
      dispatch({ type: TeacherActionsType.FETCH_TEACHER });
      const response = await $api.get<Teacher[]>("/teachers");
      dispatch({
        type: TeacherActionsType.GET_ALL_TEACHERS,
        payload: response.data,
      });
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        if (e.response?.status == 404) {
          dispatch({
            type: TeacherActionsType.ERROR_TEACHER,
            payload: "Teachers have not yet been added",
          });
        } else {
          dispatch({
            type: TeacherActionsType.ERROR_TEACHER,
            payload: "Teacher loading error",
          });
        }
      }
    }
  };
};
