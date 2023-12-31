import { ListComponentProps } from "types/props";
import * as S from "./styles";
import { TaskList } from "components/TaskList/TaskList";
import { Task } from "types/api";
import { useNavigate, useParams } from "react-router-dom";

export const TaskListDesk: React.FC<ListComponentProps<Task>> = ({ data }) => {
  const openTasks = data.filter((el) => !el.status);
  const doneTasks = data.filter((el) => el.status);
  const params = useParams();
  const navigation = useNavigate();

  const onAdd = () => {
    navigation("/workspace/tasks?openForm=true", {
      state: {
        selectedSubject: params.id,
      },
    });
  };

  return (
    <S.Container>
      <S.Column>
        <S.TopMenu>
          <S.Group>
            <S.ColumnIcon $color="#B8B7BE" />
            <S.Title>Open</S.Title>
          </S.Group>
          <S.Add onClick={onAdd} />
        </S.TopMenu>
        <TaskList data={openTasks} />
      </S.Column>
      <S.Column>
        <S.TopMenu>
          <S.Group>
            <S.ColumnIcon $color="#00B884" />
            <S.Title>Done</S.Title>
          </S.Group>
        </S.TopMenu>
        <TaskList data={doneTasks} />
      </S.Column>
    </S.Container>
  );
};
