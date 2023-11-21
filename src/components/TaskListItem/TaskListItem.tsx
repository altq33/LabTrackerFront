import { Badge } from "components/SubjectListItem/styles";
import * as S from "./styles";
import docIcon from "assets/icons/Paper.svg";
import { Task } from "types/api";
import { getBadgeColor } from "util/index";

export const TaskListItem: React.FC<
  Pick<Task, "type" | "name" | "priority" | "id">
> = ({ type, name, priority, id }) => {
  const color = getBadgeColor(type);

  return (
    <S.NavigationLink to={`/workspace/tasks/${id}`}>
      <S.Container>
        {type && (
          <S.BadgeContainer>
            <Badge color={color}>{type}</Badge>
          </S.BadgeContainer>
        )}
        <S.NameContainer>
          <S.Icon src={docIcon} />
          <S.Name>{name}</S.Name>
        </S.NameContainer>
        <S.PriorityContainer>{priority}</S.PriorityContainer>
      </S.Container>
    </S.NavigationLink>
  );
};
