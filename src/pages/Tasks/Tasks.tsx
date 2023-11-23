import { useDispatch } from "react-redux";
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppDispatch } from "types/store";
import { getAllTasks } from "store/actionCreators/tasks";
import { AllTaskList } from "components/AllTaskList/AllTaskList";
import { AddBtn } from "pages/Teachers/styles";
import { createPortal } from "react-dom";
import { useTypedSelector } from "hooks/useTypedSelector";
import { TasksForm } from "components/TasksForm/TasksForm";

export const Tasks = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useTypedSelector((state) => state.task);
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    document.title = "Tasks";
    dispatch(getAllTasks());
    if (searchParams.get("openForm")) {
      setIsOpen(true);
    }
  }, [searchParams, dispatch]);

  const onAdd = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    setSearchParams({});
  };

  return (
    <S.TasksContainer>
      <AddBtn onClick={onAdd}>Add task</AddBtn>
      {state.loading ? (
        <h2>Loading...</h2>
      ) : state.tasks.length ? (
        <AllTaskList data={state.tasks} />
      ) : (
        <h2>No tasks</h2>
      )}
      {createPortal(
        <TasksForm onClose={onClose} isOpen={isOpen} />,
        document.body,
      )}
    </S.TasksContainer>
  );
};
