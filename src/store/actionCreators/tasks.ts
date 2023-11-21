/* eslint-disable import/named */
import { AxiosError } from "axios";
import { $api } from "http/index";
import { Dispatch } from "redux";
import { AugmentedTask, Task } from "types/api";
import { TaskAction, TaskActionsType } from "types/store";

export const getAllTasks = () => {
  return async (dispatch: Dispatch<TaskAction>) => {
    try {
      dispatch({ type: TaskActionsType.FETCH_TASK });
      const response = await $api.get<AugmentedTask[]>("/tasks");
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

export const addTask = (data: Omit<Task, "id" | "status">) => {
  return async (dispatch: Dispatch<TaskAction>) => {
    try {
      dispatch({ type: TaskActionsType.FETCH_TASK });
      const response = await $api.post<AugmentedTask>(`/tasks`, data);
      dispatch({
        type: TaskActionsType.ADD_TASK,
        payload: response.data,
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
      dispatch({ type: TaskActionsType.FETCH_TASK });
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
      dispatch({ type: TaskActionsType.FETCH_TASK });
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
