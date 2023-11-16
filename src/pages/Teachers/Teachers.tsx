import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { AppDispatch, TeacherState, UserState } from "types/store";
import { useLayoutEffect, useState } from "react";
import { getAllTeachers } from "store/actionCreators/teachers";
import { TeacherList } from "components/TeacherList/TeacherList";
import { createPortal } from "react-dom";
import { TeachersForm } from "components/TeachersForm/TeachersForm";

export const Teachers = () => {
  const dispatch: AppDispatch = useDispatch();
  const [formIsOpen, setFormIsOpen] = useState(false);
  const state = useSelector(
    (state: { user: UserState; teacher: TeacherState }) =>
      state.teacher.teachers,
  );

  useLayoutEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  return (
    <S.TeachersContainer>
      <S.AddBtn onClick={() => setFormIsOpen(true)}>Add teacher</S.AddBtn>
      <TeacherList data={state || []} />
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
