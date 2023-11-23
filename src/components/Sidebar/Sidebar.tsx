import * as S from "./styles";
import logoIcon from "assets/icons/logo.svg";
import { Navigation } from "../Navigation";
import { navLinksList } from "resources/resources";
import { MiniProfile } from "components/MiniProfile/MiniProfile";
import { SidebarProps } from "types/props";
import { SidebarList } from "components/SidebarList/SidebarList";
import { SubjectSidebarListItem } from "components/SubjectSidebarListItem/SubjectSidebarListItem";
import useWindowHeight from "hooks/useWindowHeight";
import { TaskSidebarListItem } from "components/TaskSidebarListItem/TaskSidebarListItem";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useEffect } from "react";
import { getAllTeachers } from "store/actionCreators/teachers";
import { useDispatch } from "react-redux";
import { getAllSubjects } from "store/actionCreators/subjects";
import { getAllTasks } from "store/actionCreators/tasks";
import { AppDispatch } from "types/store";

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const state = useTypedSelector((state) => state);
  const windowHeight = useWindowHeight();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTeachers());
    dispatch(getAllSubjects());
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <div>
      <S.SidebarContainer $isOpen={isOpen}>
        <S.LogoContainer onClick={onClose}>
          <S.LogoIcon src={logoIcon} alt="Pretty logo for you" />
          <S.LogoTitle>LabTracker</S.LogoTitle>
        </S.LogoContainer>
        <Navigation links={navLinksList} />
        {windowHeight > 625 && (
          <SidebarList
            title={"Subjects"}
            data={state.subject.subjects}
            render={(id, title, count) => (
              <SubjectSidebarListItem
                key={id}
                id={id}
                name={title}
                count={count!}
              />
            )}
            link="subjects?openForm=true"
          />
        )}
        {windowHeight > 800 && (
          <SidebarList
            title={"Tasks"}
            data={state.task.tasks.filter((task) => !task.status)}
            render={(id, title) => (
              <TaskSidebarListItem key={id} id={id} name={title} />
            )}
            link="tasks?openForm=true"
          />
        )}
        <MiniProfile
          name={state.user.user?.username ?? ""}
          link="/workspace/profile"
        />
      </S.SidebarContainer>
    </div>
  );
};
