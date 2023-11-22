import { TaskSidebarListItemProps } from "types/props";
import * as S from "./styles";

export const TaskSidebarListItem: React.FC<TaskSidebarListItemProps> = ({
  name,
  id,
}) => {
  return (
    <S.NavigationLink to={`/workspace/tasks/${id}`}>
      <S.Container>
        <S.Icon $id={id}>
          <S.Line $size={5} />
          <S.Line $size={10} />
          <S.Line $size={10} />
        </S.Icon>
        <S.Title>{name}</S.Title>
      </S.Container>
    </S.NavigationLink>
  );
};
