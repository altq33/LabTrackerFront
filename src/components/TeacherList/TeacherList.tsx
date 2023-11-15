import { TeacherListProps } from "types/props";
import * as S from "./styles";
import { TeacherListItem } from "components/TeacherListItem/TeacherListItem";

export const TeacherList: React.FC<TeacherListProps> = ({ data }) => {
  return (
    <S.TeacherListContainer>
      {data.map((teacher) => (
        <TeacherListItem key={teacher.id} {...teacher} />
      ))}
    </S.TeacherListContainer>
  );
};
