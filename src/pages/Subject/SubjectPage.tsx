import { $api } from "http/index";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Subject } from "types/api";
import * as S from "./styles";
import { PathTrack } from "components/PathTrack/PathTrack";
import subjectIcon from "assets/icons/book-svgrepo-com-gr.svg";
import { AppDispatch } from "types/store";
import { useDispatch } from "react-redux";
import { deleteSubject } from "store/actionCreators/subjects";
import { TaskListDesk } from "components/TaskListDesk/TaskListDesk";

export const SubjectPage = () => {
  const params = useParams();
  const [subject, setSubject] = useState<null | Subject>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    $api
      .get<Subject>(`/subjects/${params.id}`)
      .then((res) => {
        setSubject(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.id]);

  const onDelete = () => {
    if (subject) {
      dispatch(deleteSubject(subject.id));
      navigation("/workspace/subjects");
    }
  };

  const teacherFullName = subject?.teacher
    ? `${subject.teacher.surname} ${subject.teacher.name}`
    : "None";

  return isLoading ? (
    <div>Loading...</div>
  ) : subject ? (
    <S.Container>
      <S.TopSideContainer>
        <PathTrack
          mainId={subject.id}
          secondaryId={subject.id}
          mainTitle={subject.name}
          secondaryTitle={subject.name}
          category={"Subjects"}
          icon={subjectIcon}
        />
        <S.ButtonsContainer>
          <S.DeleteBtn onClick={onDelete} />
        </S.ButtonsContainer>
      </S.TopSideContainer>

      <S.FullCover $id={subject.id}>
        <S.InfoContainer>
          <S.Title>{subject.name}</S.Title>
          <S.StatContainer>
            <S.Label>Teacher</S.Label>
            <S.StatValue>{teacherFullName}</S.StatValue>
          </S.StatContainer>
        </S.InfoContainer>
      </S.FullCover>
      <TaskListDesk data={subject.tasks} />
    </S.Container>
  ) : (
    <h2>No subject with this id</h2>
  );
};
