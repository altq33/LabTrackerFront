import * as S from "./styles";
import logoIcon from "assets/icons/logo.svg";
import { Navigation } from "../Navigation";
import { navLinksList } from "resources/resources";
import { MiniProfile } from "components/MiniProfile/MiniProfile";
import { useSelector } from "react-redux";
import { SubjectState, TaskState, UserState } from "types/store";
import { SidebarProps } from "types/props";
import { SidebarList } from "components/SidebarList/SidebarList";
import { SubjectSidebarListItem } from "components/SubjectSidebarListItem/SubjectSidebarListItem";
import useWindowHeight from "hooks/useWindowHeight";
import { TaskSidebarListItem } from "components/TaskSidebarListItem/TaskSidebarListItem";

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const state = useSelector(
    (state: { user: UserState; subject: SubjectState; task: TaskState }) =>
      state,
  );
  const windowHeight = useWindowHeight();

  return (
    <div>
      <S.SidebarContainer $isOpen={isOpen}>
        <S.LogoContainer onClick={onClose}>
          <S.LogoIcon src={logoIcon} alt="Pretty logo for you" />
          <S.LogoTitle>LabTracker</S.LogoTitle>
        </S.LogoContainer>
        <Navigation links={navLinksList} />
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
        {windowHeight > 900 && (
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
