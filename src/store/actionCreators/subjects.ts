/* eslint-disable import/named */
import { AxiosError } from "axios";
import { $api } from "http/index";
import { Dispatch } from "redux";
import { PostSubject, Subject } from "types/api";
import { SubjectAction, SubjectActionsType } from "types/store";

export const getAllSubjects = () => {
  return async (dispatch: Dispatch<SubjectAction>) => {
    try {
      dispatch({ type: SubjectActionsType.FETCH_SUBJECT });
      const response = await $api.get<Subject[]>("/subjects");
      dispatch({
        type: SubjectActionsType.GET_ALL_SUBJECTS,
        payload: response.data,
      });
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        if (e.response?.status == 404) {
          dispatch({
            type: SubjectActionsType.ERROR_SUBJECT,
            payload: "Subjects have not yet been added",
          });
        } else {
          dispatch({
            type: SubjectActionsType.ERROR_SUBJECT,
            payload: "Subjects loading error",
          });
        }
      }
    }
  };
};

export const addSubject = (data: PostSubject) => {
  return async (dispatch: Dispatch<SubjectAction>) => {
    try {
      dispatch({ type: SubjectActionsType.FETCH_SUBJECT });
      const response = await $api.post<Subject>(`/subjects`, data);
      dispatch({
        type: SubjectActionsType.ADD_SUBJECT,
        payload: response.data,
      });
    } catch (e: unknown) {
      dispatch({
        type: SubjectActionsType.ERROR_SUBJECT,
        payload: "Add Error",
      });
    }
  };
};
