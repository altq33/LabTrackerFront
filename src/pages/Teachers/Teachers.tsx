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
  const state = useTypedSelector((state) => state.teacher);

  useLayoutEffect(() => {
    document.title = "Teachers";
    dispatch(getAllTeachers());
  }, [dispatch]);

  return (
    <S.TeachersContainer>
      <S.AddBtn onClick={() => setFormIsOpen(true)}>Add teacher</S.AddBtn>
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
