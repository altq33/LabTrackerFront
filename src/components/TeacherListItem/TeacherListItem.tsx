import * as S from "./styles";
import { useState } from "react";
import dropdownIcon from "assets/icons/dropdown-arrow-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "types/store";
import { deleteTeacher } from "store/actionCreators/teachers";
import { Teacher } from "types/api";

export const TeacherListItem: React.FC<Teacher> = ({
  id,
  name,
  surname,
  father_name,
  phone_number,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const initials = (name[0] + surname[0]).toUpperCase();

  const onDelete = () => {
    dispatch(deleteTeacher(id));
  };

  return (
    <S.TeacherListItemContainer isOpen={isOpen}>
      <S.ClosedGroup onClick={() => setIsOpen((prev) => !prev)}>
        <S.TeacherAvatar id={id}>{initials}</S.TeacherAvatar>
        <S.FullNameTitle title={name}>{name}</S.FullNameTitle>
        <S.FullNameTitle title={surname}>{surname}</S.FullNameTitle>
        <S.FullNameTitle title={father_name || "No data"}>
          {father_name || "No data"}
        </S.FullNameTitle>
        <S.FullNameTitle title={phone_number || "No data"}>
          {phone_number || "No data"}
        </S.FullNameTitle>
        <S.DropdownIcon isOpen={isOpen} src={dropdownIcon} />
      </S.ClosedGroup>
      <S.UnderFullNameTitle title={name}>Name: {name}</S.UnderFullNameTitle>
      <S.UnderFullNameTitle title={surname}>
        Surname: {surname}
      </S.UnderFullNameTitle>
      <S.UnderFullNameTitle title={father_name || "No data"}>
        Father name: {father_name || "No data"}
      </S.UnderFullNameTitle>
      <S.UnderFullNameTitle title={phone_number || "No data"}>
        Phone number: {phone_number || "No data"}
      </S.UnderFullNameTitle>
      <S.DeleteBtn isOpen={isOpen} onClick={onDelete} />
    </S.TeacherListItemContainer>
  );
};
