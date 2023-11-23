import { useDispatch } from "react-redux";
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppDispatch } from "types/store";
import { getAllTasks } from "store/actionCreators/tasks";
import { AllTaskList } from "components/AllTaskList/AllTaskList";
import { AddBtn, Filters } from "pages/Teachers/styles";
import { createPortal } from "react-dom";
import { useTypedSelector } from "hooks/useTypedSelector";
import { TasksForm } from "components/TasksForm/TasksForm";
import { useFilterParams } from "hooks/useFilterParams";
import {
  DescFilter,
  ExpiredFilter,
  PriorityFilter,
  TasksSortFilter,
  TypeFilter,
} from "types/api";
import { FilterMenu } from "components/FilterMenu/FilterMenu";

export const Tasks = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useTypedSelector((state) => state.task);
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const { appendParam, removeParam, searchParamsString } = useFilterParams<
    DescFilter | TasksSortFilter | PriorityFilter | TypeFilter | ExpiredFilter
  >();

  useEffect(() => {
    document.title = "Tasks";
    dispatch(getAllTasks(searchParamsString));
    if (searchParams.get("openForm")) {
      setIsOpen(true);
    }
  }, [searchParams, dispatch, searchParamsString]);

  const onAdd = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    searchParams.delete("openForm");
    setSearchParams(searchParams);
  };

  return (
    <S.TasksContainer>
      <AddBtn onClick={onAdd}>Add task</AddBtn>
      <Filters>
        {/* Господи прости за это, но нет времени сократить и сделать адекватным) */}
        <FilterMenu
          onAppend={() => appendParam({ label: "desc", value: true })}
          onRemove={() => removeParam({ label: "desc" })}
          isChecked={!!~searchParamsString.indexOf("desc")}
          label={"Desc"}
        />
        <FilterMenu
          onAppend={() => appendParam({ label: "sort", value: "name" })}
          onRemove={() => removeParam({ label: "sort" })}
          isChecked={!!~searchParamsString.indexOf("sort=name")}
          label={"Name"}
        />
        <FilterMenu
          onAppend={() => appendParam({ label: "sort", value: "deadline" })}
          onRemove={() => removeParam({ label: "sort" })}
          label={"Deadline"}
          isChecked={!!~searchParamsString.indexOf("sort=deadline")}
        />
        <FilterMenu
          onAppend={() => appendParam({ label: "sort", value: "priority" })}
          onRemove={() => removeParam({ label: "sort" })}
          label={"Prioriy"}
          isChecked={!!~searchParamsString.indexOf("sort=priority")}
        />
        <FilterMenu
          onAppend={() => appendParam({ label: "sort", value: "type" })}
          onRemove={() => removeParam({ label: "sort" })}
          label={"Type"}
          isChecked={!!~searchParamsString.indexOf("sort=type")}
        />
        <FilterMenu
          onAppend={() => appendParam({ label: "sort", value: "status" })}
          onRemove={() => removeParam({ label: "sort" })}
          label={"Status"}
          isChecked={!!~searchParamsString.indexOf("sort=status")}
        />
      </Filters>
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
