import { SubjectList } from "components/SubjectList/SubjectList";
import * as S from "./styles";
import { AppDispatch } from "types/store";
import { useDispatch } from "react-redux";
import { getAllSubjects } from "store/actionCreators/subjects";
import { useEffect, useLayoutEffect, useState } from "react";
import { AddBtn, Filters } from "pages/Teachers/styles";
import { SubjectsForm } from "components/SubjectsForm/SubjectsForm";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useFilterParams } from "hooks/useFilterParams";
import { DescFilter, SubjectsSortFilter } from "types/api";
import { FilterMenu } from "components/FilterMenu/FilterMenu";

export const Subjects = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useTypedSelector((state) => state.subject);
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const { appendParam, removeParam, searchParamsString } = useFilterParams<
    DescFilter | SubjectsSortFilter
  >();

  useLayoutEffect(() => {
    dispatch(getAllSubjects(searchParamsString));
  }, [dispatch, searchParamsString]);

  useEffect(() => {
    document.title = "Subjects";
    if (searchParams.get("openForm")) {
      setIsOpen(true);
    }
  }, [searchParams]);

  return (
    <S.SubjectsContainer>
      <AddBtn onClick={() => setIsOpen(true)}>Add subject</AddBtn>
      <Filters>
        {/* Господи прости за это, но мне не пришло в голову как это сократить и сделать адекватным) */}
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
          onAppend={() => appendParam({ label: "sort", value: "course" })}
          onRemove={() => removeParam({ label: "sort" })}
          label={"Course"}
          isChecked={!!~searchParamsString.indexOf("sort=course")}
        />
        <FilterMenu
          onAppend={() => appendParam({ label: "sort", value: "tasks_count" })}
          onRemove={() => removeParam({ label: "sort" })}
          isChecked={!!~searchParamsString.indexOf("sort=tasks_count")}
          label={"Tasks count"}
        />
      </Filters>
      {state.loading ? (
        <h2>Loading...</h2>
      ) : state.subjects.length ? (
        <SubjectList data={state.subjects} />
      ) : (
        <h2>No subjects</h2>
      )}

      {createPortal(
        <SubjectsForm
          onClose={() => {
            setIsOpen(false);
            searchParams.delete("openForm");
            setSearchParams(searchParams);
          }}
          isOpen={isOpen}
        />,
        document.body,
      )}
    </S.SubjectsContainer>
  );
};
