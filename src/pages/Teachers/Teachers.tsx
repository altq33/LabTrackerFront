import { useDispatch } from "react-redux";
import * as S from "./styles";
import { AppDispatch } from "types/store";
import { useLayoutEffect, useState } from "react";
import { getAllTeachers } from "store/actionCreators/teachers";
import { TeacherList } from "components/TeacherList/TeacherList";
import { createPortal } from "react-dom";
import { TeachersForm } from "components/TeachersForm/TeachersForm";
import { useTypedSelector } from "hooks/useTypedSelector";
import { FilterMenu } from "components/FilterMenu/FilterMenu";
import { useFilterParams } from "hooks/useFilterParams";
import { DescFilter, TeachersSortFilter } from "types/api";

export const Teachers = () => {
  const dispatch: AppDispatch = useDispatch();
  const [formIsOpen, setFormIsOpen] = useState(false);
  const state = useTypedSelector((state) => state.teacher);

  const { appendParam, removeParam, searchParamsString } = useFilterParams<
    DescFilter | TeachersSortFilter
  >();

  useLayoutEffect(() => {
    document.title = "Teachers";
    dispatch(getAllTeachers(searchParamsString));
  }, [dispatch, searchParamsString]);

  return (
    <S.TeachersContainer>
      <S.AddBtn onClick={() => setFormIsOpen(true)}>Add teacher</S.AddBtn>
      <S.Filters>
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
          onAppend={() => appendParam({ label: "sort", value: "surname" })}
          onRemove={() => removeParam({ label: "sort" })}
          label={"Surname"}
          isChecked={!!~searchParamsString.indexOf("sort=surname")}
        />
        <FilterMenu
          onAppend={() => appendParam({ label: "sort", value: "father_name" })}
          onRemove={() => removeParam({ label: "sort" })}
          isChecked={!!~searchParamsString.indexOf("sort=father_name")}
          label={"FatherName"}
        />
      </S.Filters>

      {state.loading ? (
        <h2>Loading...</h2>
      ) : state.teachers.length ? (
        <TeacherList data={state.teachers} />
      ) : (
        <h2>No teachers</h2>
      )}

      {createPortal(
        <TeachersForm
          onClose={() => setFormIsOpen(false)}
          isOpen={formIsOpen}
        />,
        document.body,
      )}
    </S.TeachersContainer>
  );
};
