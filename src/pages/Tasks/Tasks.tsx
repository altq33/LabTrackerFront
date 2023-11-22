import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppDispatch, TaskState } from "types/store";
import { getAllTasks } from "store/actionCreators/tasks";
import { AllTaskList } from "components/AllTaskList/AllTaskList";
import { AddBtn } from "pages/Teachers/styles";
import { createPortal } from "react-dom";
import { SubjectsForm } from "components/SubjectsForm/SubjectsForm";

export const Tasks = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: { task: TaskState }) => state.task.tasks);
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
        <SubjectsForm onClose={onClose} isOpen={isOpen} />,
        document.body,
      )}
    </S.TasksContainer>
  );
};
