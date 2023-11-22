import { useTypedSelector } from "hooks/useTypedSelector";
import * as S from "./styles";
import { TeacherAvatar } from "components/TeacherListItem/styles";
// eslint-disable-next-line import/named
import { OptionProps } from "react-select";
import { SelectTeacherOptions } from "types/props";

export const TeacherSelectItem: React.FC<OptionProps<SelectTeacherOptions>> = ({
  innerRef,
  innerProps,
  data,
  isFocused,
  isSelected,
}) => {
  const state = useTypedSelector((state) => state.teacher.teachers);

  const currentTeacher = state.find((el) => el.id == data.value);
  const initials = currentTeacher
    ? (currentTeacher.name[0] + currentTeacher.surname[0]).toUpperCase()
    : "NN";

  return (
    <S.Container
      $isFocused={isFocused}
      $isSelected={isSelected}
      ref={innerRef}
      {...innerProps}
    >
      <TeacherAvatar $id={data.value ?? "N"}>{initials}</TeacherAvatar>
      {currentTeacher ? (
        <S.Title>
          {`${currentTeacher.surname} ${currentTeacher.name[0]}.`}
        </S.Title>
      ) : (
        "No name"
      )}
    </S.Container>
  );
};
