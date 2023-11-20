import { TasksOwner } from "types/props";
import * as S from "./styles";
import { TaskListItem } from "components/TaskListItem/TaskListItem";

export const TaskList: React.FC<TasksOwner> = ({ tasks }) => {
  return (
    <S.List>
      {tasks.map((el) => (
        <TaskListItem
          type={el.type}
          name={el.name}
          priority={el.priority}
          id={el.id}
        />
      ))}
    </S.List>
  );
};
