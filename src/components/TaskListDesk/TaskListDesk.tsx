import { TasksOwner } from "types/props";
import * as S from "./styles";
import { TaskList } from "components/TaskList/TaskList";

export const TaskListDesk: React.FC<TasksOwner> = ({ tasks }) => {
  const openTasks = tasks.filter((el) => !el.status);
  const doneTasks = tasks.filter((el) => el.status);

  return (
    <S.Container>
      <S.Column>
        <S.TopMenu>
          <S.ColumnIcon color="#B8B7BE" />
          <S.Title>Open</S.Title>
        </S.TopMenu>
        <TaskList tasks={openTasks} />
      </S.Column>
      <S.Column>
        <S.TopMenu>
          <S.ColumnIcon color="#00B884" />
          <S.Title>Done</S.Title>
        </S.TopMenu>
        <TaskList tasks={doneTasks} />
      </S.Column>
    </S.Container>
  );
};
