import { ListComponentProps } from "types/props";
import * as S from "./styles";
import { TeacherListItem } from "components/TeacherListItem/TeacherListItem";
import { Teacher } from "types/api";

export const TeacherList: React.FC<ListComponentProps<Teacher>> = ({
  data,
}) => {
  return (
    <S.TeacherListContainer>
      {data.map((teacher) => (
        <TeacherListItem key={teacher.id} {...teacher} />
      ))}
    </S.TeacherListContainer>
  );
};
