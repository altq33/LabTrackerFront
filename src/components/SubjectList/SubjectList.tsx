import { Subject } from "types/api";
import * as S from "./styles";
import { ListComponentProps } from "types/props";
import { SubjectListItem } from "components/SubjectListItem/SubjectListItem";

export const SubjectList: React.FC<ListComponentProps<Subject>> = ({
  data,
}) => {
  return (
    <S.SubjectListContainer>
      {data.map((subject) => (
        <SubjectListItem key={subject.id} {...subject} />
      ))}
    </S.SubjectListContainer>
  );
};
