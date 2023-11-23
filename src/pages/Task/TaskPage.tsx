import { $api } from "http/index";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AugmentedTask } from "types/api";
import * as S from "pages/Subject/styles";
import { PathTrack } from "components/PathTrack/PathTrack";
import tasksIcon from "assets/icons/tasks-list-svgrepo-com-gr.svg";
import { AppDispatch } from "types/store";
import { useDispatch } from "react-redux";
import { deleteTask } from "store/actionCreators/tasks";
import { getBadgeColor, normalizeDateTime } from "util/index";
import * as SC from "./styles";
import timeIcon from "assets/icons/deadline.svg";
import typeIcon from "assets/icons/Paper.svg";
import { Badge } from "components/SubjectListItem/styles";
import assignIcon from "assets/icons/Profile.svg";
import priorityIcon from "assets/icons/Priority.svg";
import atIcon from "assets/icons/@.svg";
import { useTypedSelector } from "hooks/useTypedSelector";

export const TaskPage = () => {
  const params = useParams();
  const [task, setTask] = useState<null | AugmentedTask>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigate();
  const user = useTypedSelector((state) => state.user.user);

  useEffect(() => {
    setIsLoading(true);
    $api
      .get<AugmentedTask>(`/tasks/${params.id}`)
      .then((res) => {
        setTask(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.id]);

  const onDelete = () => {
    if (task) {
      dispatch(deleteTask(task.id));
      navigation("/workspace/tasks");
    }
  };

  const deadline =
    task && (task.deadline ? normalizeDateTime(task.deadline) : "None");

  const teacherFullName = task?.subject
    ? `${task?.subject.teacher?.surname} ${task?.subject.teacher?.name}`
    : "None";

  return isLoading ? (
    <div>Loading...</div>
  ) : task ? (
    <S.Container>
      <S.TopSideContainer>
        <PathTrack
          mainId={task.id}
          secondaryId={task.id}
          mainTitle={task.name}
          secondaryTitle={task.name}
          category={"Tasks"}
          icon={tasksIcon}
        />
        <S.ButtonsContainer>
          <S.DeleteBtn onClick={onDelete} />
        </S.ButtonsContainer>
      </S.TopSideContainer>

      <S.FullCover $id={task.id}>
        <S.InfoContainer>
          <S.Title>{task.name}</S.Title>
          <S.Stats>
            <S.StatContainer>
              <S.Label>Deadline</S.Label>
              <S.StatValue>{deadline}</S.StatValue>
            </S.StatContainer>
            <S.StatContainer>
              <S.Label>Teacher</S.Label>
              <S.StatValue>{teacherFullName}</S.StatValue>
            </S.StatContainer>
            <S.StatContainer>
              <S.Label>Subject</S.Label>
              <S.StatValue>{task.subject.name}</S.StatValue>
            </S.StatContainer>
          </S.Stats>
        </S.InfoContainer>
      </S.FullCover>
      <SC.FullInfoContainer>
        <SC.LeftSideList>
          <SC.ListItem>
            <SC.Label>
              <SC.Icon src={timeIcon} />
              <SC.Title>Deadline</SC.Title>
            </SC.Label>
            <SC.Date>{deadline}</SC.Date>
          </SC.ListItem>
          <SC.ListItem>
            <SC.Label>
              <SC.Icon src={typeIcon} />
              <SC.Title>Type</SC.Title>
            </SC.Label>
            <Badge $color={getBadgeColor(task.type)}>
              {task.type ?? "None"}
            </Badge>
          </SC.ListItem>
          <SC.ListItem>
            <SC.Label>
              <SC.Icon src={assignIcon} />
              <SC.Title>Assign</SC.Title>
            </SC.Label>
            <SC.NameContainer>
              <SC.IconMini src={atIcon} />
              <SC.Date>{user?.username}</SC.Date>
            </SC.NameContainer>
          </SC.ListItem>
          <SC.ListItem>
            <SC.Label>
              <SC.Icon src={priorityIcon} />
              <SC.Title>Priority</SC.Title>
            </SC.Label>
            <SC.NameContainer>
              <SC.Date>{task.priority}</SC.Date>
            </SC.NameContainer>
          </SC.ListItem>
        </SC.LeftSideList>
        <SC.RightSideContainer>
          <SC.RightSideTitle>Description</SC.RightSideTitle>
          <SC.Description>{task.description ?? "None"}</SC.Description>
        </SC.RightSideContainer>
      </SC.FullInfoContainer>
    </S.Container>
  ) : (
    <h2>No task with this id</h2>
  );
};
