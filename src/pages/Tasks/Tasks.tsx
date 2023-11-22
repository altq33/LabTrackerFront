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
  const state = useTypedSelector((state) => state.task.tasks);
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
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
      <AllTaskList data={state || []} />
      {createPortal(
        <TasksForm onClose={onClose} isOpen={isOpen} />,
        document.body,
      )}
    </S.TasksContainer>
  );
};
