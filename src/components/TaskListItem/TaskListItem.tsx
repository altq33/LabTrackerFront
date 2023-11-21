import { Badge } from "components/SubjectListItem/styles";
import * as S from "./styles";
import docIcon from "assets/icons/Paper.svg";
import { Task, TaskType } from "types/api";

export const TaskListItem: React.FC<
  Pick<Task, "type" | "name" | "priority" | "id">
> = ({ type, name, priority, id }) => {
  let color;
  switch (type) {
    case TaskType.lab:
      color = "#00B884";
      break;
    case TaskType.presentation:
      color = "#FFC800";
      break;
    case TaskType.coursework:
      color = "#e42020";
      break;
    case TaskType.report:
      color = "#7B68EE";
      break;
    case TaskType.typical:
      color = "#FD71AF";
      break;
    default:
      color = "#00B884";
  }

  return (
    <S.NavigationLink to={`/workspace/tasks/${id}`}>
      <S.Container>
        type && (
        <S.BadgeContainer>
          <Badge color={color}>{type}</Badge>
        </S.BadgeContainer>
        )
        <S.NameContainer>
          <S.Icon src={docIcon} />
          <S.Name>{name}</S.Name>
        </S.NameContainer>
        <S.PriorityContainer>{priority}</S.PriorityContainer>
      </S.Container>
    </S.NavigationLink>
  );
};
