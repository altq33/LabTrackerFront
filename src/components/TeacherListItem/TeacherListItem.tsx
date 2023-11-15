import { TeacherListItemProps } from "types/props";
import * as S from "./styles";
import { useState } from "react";

export const TeacherListItem: React.FC<TeacherListItemProps> = ({
  name,
  surname,
  father_name,
  phone_number,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.TeacherListItem onClick={() => setIsOpen((prev) => !prev)}>
      <S.TeacherAvatar>{(name[0] + surname[0]).toUpperCase()}</S.TeacherAvatar>
      <S.FullNameTitle>{name}</S.FullNameTitle>
      <S.FullNameTitle>{surname}</S.FullNameTitle>
      <S.FullNameTitle>{father_name || "No data"}</S.FullNameTitle>
      <S.FullNameTitle>{phone_number || "No data"}</S.FullNameTitle>
    </S.TeacherListItem>
  );
};
