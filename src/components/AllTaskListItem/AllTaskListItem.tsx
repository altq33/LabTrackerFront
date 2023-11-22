import { AllTaskListItemProps } from "types/props";
import * as S from "./styles";
import { Badge } from "components/SubjectListItem/styles";
import { getBadgeColor, getPriorityColor, normalizeDate } from "util/index";
import { BadgeContainer, NavigationLink } from "components/TaskListItem/styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "types/store";
import { updateTask } from "store/actionCreators/tasks";
import { MouseEvent } from "react";

export const AllTaskListItem: React.FC<AllTaskListItemProps> = ({
  name,
  status,
  priority,
  type,
  deadline,
  id,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const typeColor = getBadgeColor(type);
  const priorityColor = getPriorityColor(priority);
  const normalizedDate = normalizeDate(deadline || "");

  const updateTaskStatus = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(updateTask(id, { status: !status }));
  };

  return (
    <NavigationLink to={`/workspace/tasks/${id}`}>
      <S.Container>
        <S.TopContainer onClick={updateTaskStatus}>
          <S.Checkbox role="checkbox" $isChecked={status} />
          <S.Name $isChecked={status}>{name}</S.Name>
        </S.TopContainer>
        <S.BottomContainer>
          <BadgeContainer>
            {type && <Badge $color={typeColor}>{type}</Badge>}
            <Badge $color={priorityColor}>{priority}</Badge>
          </BadgeContainer>
          {deadline && <S.Date>{normalizedDate}</S.Date>}
        </S.BottomContainer>
      </S.Container>
    </NavigationLink>
  );
};
