import { TeacherListItemProps } from "types/props";
import * as S from "./styles";

export const TeacherListItem: React.FC<TeacherListItemProps> = ({
  name,
  surname,
  father_name,
  phone_number,
}) => {
  return (
    <S.TeacherListItem>
      <S.TeacherAvatar>{(name[0] + surname[0]).toUpperCase()}</S.TeacherAvatar>
    </S.TeacherListItem>
  );
};
