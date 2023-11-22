import { useDispatch } from "react-redux";
import * as S from "./styles";
import { AppDispatch } from "types/store";
import { useLayoutEffect, useState } from "react";
import { getAllTeachers } from "store/actionCreators/teachers";
import { TeacherList } from "components/TeacherList/TeacherList";
import { createPortal } from "react-dom";
import { TeachersForm } from "components/TeachersForm/TeachersForm";
import { useTypedSelector } from "hooks/useTypedSelector";

export const Teachers = () => {
  const dispatch: AppDispatch = useDispatch();
  const [formIsOpen, setFormIsOpen] = useState(false);
  const state = useTypedSelector((state) => state.teacher.teachers);

  useLayoutEffect(() => {
    document.title = "Teachers";
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
