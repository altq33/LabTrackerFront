/* eslint-disable import/named */
import { AxiosError } from "axios";
import { $api } from "http/index";
import { Dispatch } from "redux";
import { Teacher } from "types/api";
import { TeacherAction, TeacherActionsType } from "types/store";

export const getAllTeachers = (params?: string) => {
  return async (dispatch: Dispatch<TeacherAction>) => {
    try {
      dispatch({ type: TeacherActionsType.FETCH_TEACHER });
      const response = await $api.get<Teacher[]>(`/teachers?${params ?? ""}`);
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
            payload: "Teachers loading error",
          });
        }
      }
    }
  };
};

export const deleteTeacher = (id: string) => {
  return async (dispatch: Dispatch<TeacherAction>) => {
    try {
      const response = await $api.delete<{ id: Teacher["id"] }>(
        `/teachers/${id}`,
      );
      dispatch({
        type: TeacherActionsType.DELETE_TEACHER,
        payload: response.data.id,
      });
    } catch (e: unknown) {
      dispatch({
        type: TeacherActionsType.ERROR_TEACHER,
        payload: "Delete Error",
      });
    }
  };
};

export const addTeacher = (data: Omit<Teacher, "id">) => {
  return async (dispatch: Dispatch<TeacherAction>) => {
    try {
      const response = await $api.post<Teacher>(`/teachers`, data);
      dispatch({
        type: TeacherActionsType.ADD_TEACHER,
        payload: response.data,
      });
    } catch (e: unknown) {
      dispatch({
        type: TeacherActionsType.ERROR_TEACHER,
        payload: "Add Error",
      });
    }
  };
};
