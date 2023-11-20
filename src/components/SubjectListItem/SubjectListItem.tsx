import { Subject } from "types/api";
import * as S from "./styles";

export const SubjectListItem: React.FC<Subject> = ({
  name,
  course,
  teacher,
  id,
  tasks_count,
}) => {
  return (
    <S.SubjectListItemContainer to={`/workspace/subjects/${id}`}>
      <S.Cover id={id} />
      <S.Container>
        <S.InfoContainer>
          <S.TasksCount id={id}>{tasks_count ?? 0}</S.TasksCount>
          <S.TextContainer>
            <S.Name>{name}</S.Name>
            <S.TeacherName>
              {teacher
                ? `${teacher.surname} ${teacher.name[0]}.`
                : "No teacher"}
            </S.TeacherName>
          </S.TextContainer>
        </S.InfoContainer>
        <S.AddedInfoContainer>
          <S.Badge color="#FD71AF">Course: {course}</S.Badge>
        </S.AddedInfoContainer>
      </S.Container>
    </S.SubjectListItemContainer>
  );
};
