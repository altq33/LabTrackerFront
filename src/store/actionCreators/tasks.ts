/* eslint-disable import/named */
import { AxiosError } from "axios";
import { $api } from "http/index";
import { Dispatch } from "redux";
import { AugmentedTask, Subject, Task } from "types/api";
import {
  SubjectAction,
  SubjectActionsType,
  TaskAction,
  TaskActionsType,
} from "types/store";

export const getAllTasks = (params: string) => {
  return async (dispatch: Dispatch<TaskAction>) => {
    try {
      dispatch({ type: TaskActionsType.FETCH_TASK });
      const response = await $api.get<AugmentedTask[]>(`/tasks?${params}`);
      dispatch({
        type: TaskActionsType.GET_ALL_TASKS,
        payload: response.data,
      });
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        if (e.response?.status == 404) {
          dispatch({
            type: TaskActionsType.ERROR_TASK,
            payload: "Tasks have not yet been added",
          });
        } else {
          dispatch({
            type: TaskActionsType.ERROR_TASK,
            payload: "Tasks loading error",
          });
        }
      }
    }
  };
};

export const addTask = (
  data: Omit<Task, "id" | "status"> & { subject_id: Subject["id"] },
) => {
  return async (dispatch: Dispatch<TaskAction | SubjectAction>) => {
    try {
      const response = await $api.post<AugmentedTask>(`/tasks`, data);
      dispatch({
        type: TaskActionsType.ADD_TASK,
        payload: response.data,
      });
      dispatch({
        type: SubjectActionsType.UPDATE_TASK_COUNT,
        payload: response.data.subject.id,
      });
    } catch (e: unknown) {
      dispatch({
        type: TaskActionsType.ERROR_TASK,
        payload: "Add Error",
      });
    }
  };
};

export const deleteTask = (id: string) => {
  return async (dispatch: Dispatch<TaskAction>) => {
    try {
      const response = await $api.delete<{ id: Task["id"] }>(`/tasks/${id}`);
      dispatch({
        type: TaskActionsType.DELETE_TASK,
        payload: response.data.id,
      });
    } catch (e: unknown) {
      dispatch({
        type: TaskActionsType.ERROR_TASK,
        payload: "Delete Error",
      });
    }
  };
};

export const updateTask = (id: string, data: Partial<Omit<Task, "id">>) => {
  return async (dispatch: Dispatch<TaskAction>) => {
    try {
      const response = await $api.patch<AugmentedTask>(`/tasks/${id}`, data);
      dispatch({
        type: TaskActionsType.UPDATE_TASK,
        payload: response.data,
      });
    } catch (e: unknown) {
      dispatch({
        type: TaskActionsType.ERROR_TASK,
        payload: "Update Error",
      });
    }
  };
};
