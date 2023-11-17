import { SubjectList } from "components/SubjectList/SubjectList";
import * as S from "./styles";
import { AppDispatch, SubjectState } from "types/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubjects } from "store/actionCreators/subjects";
import { useLayoutEffect } from "react";

export const Subjects = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(
    (state: { subject: SubjectState }) => state.subject.subjects,
  );

  useLayoutEffect(() => {
    dispatch(getAllSubjects());
  }, [dispatch]);

  return (
    <S.SubjectsContainer>
      <SubjectList data={state || []} />
    </S.SubjectsContainer>
  );
};
