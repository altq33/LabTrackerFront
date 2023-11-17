import { SubjectSidebarListItemProps } from "types/props";
import * as S from "./styles";

export const SubjectSidebarListItem: React.FC<SubjectSidebarListItemProps> = ({
  id,
  name,
  count,
}) => {
  return (
    <S.NavigationLink to={`subjects/${id}`} title={name}>
      <S.ListItem>
        <S.Badge id={id} />
        <S.Title>{name}</S.Title>
        <S.Count>{count}</S.Count>
      </S.ListItem>
    </S.NavigationLink>
  );
};
