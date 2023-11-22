import { useTypedSelector } from "hooks/useTypedSelector";
import * as S from "components/TeacherSelectItem/styles";
// eslint-disable-next-line import/named
import { OptionProps } from "react-select";
import { SelectSubjectOptions } from "types/props";
import { TeacherAvatar } from "components/TeacherListItem/styles";

export const SubjectSelectItem: React.FC<OptionProps<SelectSubjectOptions>> = ({
  innerRef,
  innerProps,
  data,
  isFocused,
  isSelected,
}) => {
  const state = useTypedSelector((state) => state.subject.subjects);

  const currentSubject = state.find((el) => el.id == data.value);

  return (
    <S.Container
      $isFocused={isFocused}
      $isSelected={isSelected}
      ref={innerRef}
      {...innerProps}
    >
      <TeacherAvatar $id={data.value}>{currentSubject?.course}</TeacherAvatar>
      <S.Title>{currentSubject?.name}</S.Title>
    </S.Container>
  );
};
