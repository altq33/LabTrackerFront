import * as S from "./styles";
import { TeacherAvatar } from "components/TeacherListItem/styles";
import { useSelector } from "react-redux";
// eslint-disable-next-line import/named
import { OptionProps } from "react-select";
import { SelectTeacherOptions } from "types/props";
import { TeacherState } from "types/store";

export const TeacherSelectItem: React.FC<OptionProps<SelectTeacherOptions>> = ({
  innerRef,
  innerProps,
  data,
  isFocused,
  isSelected,
}) => {
  const state = useSelector(
    (state: { teacher: TeacherState }) => state.teacher.teachers,
  );

  const currentTeacher = state.find((el) => el.id == data.value);
  const initials = currentTeacher
    ? (currentTeacher.name[0] + currentTeacher.surname[0]).toUpperCase()
    : "NN";

  return (
    <S.Container
      isFocused={isFocused}
      isSelected={isSelected}
      ref={innerRef}
      {...innerProps}
    >
      <TeacherAvatar id={data.value ?? "N"}>{initials}</TeacherAvatar>
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
