import { ListComponentProps } from "types/props";
import * as S from "./styles";
import { TaskListItem } from "components/TaskListItem/TaskListItem";
import { Task } from "types/api";

export const TaskList: React.FC<ListComponentProps<Task>> = ({ data }) => {
  return (
    <S.List>
      {data.map((el) => (
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
