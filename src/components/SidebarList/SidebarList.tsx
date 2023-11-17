import { SidebarListProps } from "types/props";
import * as S from "./styles";

export const SidebarList: React.FC<SidebarListProps> = ({
  title,
  data,
  render,
  onAdd,
}) => {
  return (
    <S.ListContainer>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.AddBtn onClick={onAdd} />
      </S.TitleContainer>
      <S.List>
        {data.slice(0, 3).map((el) => render(el.id, el.name, el.tasks_count))}
      </S.List>
    </S.ListContainer>
  );
};
