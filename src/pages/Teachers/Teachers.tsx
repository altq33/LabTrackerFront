import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { AppDispatch, TeacherState, UserState } from "types/store";
import { useLayoutEffect } from "react";
import { getAllTeachers } from "store/actionCreators/teachers";
import { TeacherList } from "components/TeacherList/TeacherList";

export const Teachers = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(
    (state: { user: UserState; teacher: TeacherState }) => state.teacher,
  );

  useLayoutEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  return (
    <S.TeachersContainer>
      {state.loading ? "Loading" : <TeacherList data={state.teachers || []} />}
      {state.error}
    </S.TeachersContainer>
  );
};
