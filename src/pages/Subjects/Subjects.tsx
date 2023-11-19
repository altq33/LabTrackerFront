import { SubjectList } from "components/SubjectList/SubjectList";
import * as S from "./styles";
import { AppDispatch, SubjectState } from "types/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubjects } from "store/actionCreators/subjects";
import { useEffect, useLayoutEffect, useState } from "react";
import { AddBtn } from "pages/Teachers/styles";
import { SubjectsForm } from "components/SubjectsForm/SubjectsForm";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";

export const Subjects = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(
    (state: { subject: SubjectState }) => state.subject.subjects,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useLayoutEffect(() => {
    dispatch(getAllSubjects());
  }, [dispatch]);

  useEffect(() => {
    if (searchParams.get("openForm")) {
      setIsOpen(true);
    }
  }, [searchParams]);

  return (
    <S.SubjectsContainer>
      <AddBtn onClick={() => setIsOpen(true)}>Add subject</AddBtn>
      <SubjectList data={state || []} />
      {createPortal(
        <SubjectsForm
          onClose={() => {
            setIsOpen(false);
            setSearchParams({});
          }}
          isOpen={isOpen}
        />,
        document.body,
      )}
    </S.SubjectsContainer>
  );
};
