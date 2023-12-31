import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { NavigationProps } from "types/props";
import { useTypedSelector } from "hooks/useTypedSelector";

const LinkList = styled.ul`
  width: 217px;
  display: flex;
  flex-direction: column;
  margin-bottom: 33px;

  @media screen and (max-width: 624px) {
    width: 50px;
  }
`;

const NavigationLink = styled(NavLink)`
  &.active {
    li {
      background-color: ${({ theme }) => theme.brightColors.blue};
      color: ${({ theme }) => theme.dullColors.white};
      img {
        display: none;
        &:nth-child(2) {
          display: block;
        }
      }
    }
  }
`;

const LinkListItem = styled.li`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.dullColors.gray3};
  padding: 15px 13px;

  img {
    &:nth-child(2) {
      display: none;
    }
  }

  @media screen and (max-width: 624px) {
    span {
      display: none;
    }
  }
`;

export const Navigation: React.FC<NavigationProps> = ({ links }) => {
  const state = useTypedSelector((state) => state);

  const getCount = (text: string): number | string => {
    switch (text) {
      case "teachers":
        return state.teacher.teachers.length;
      case "subjects":
        return state.subject.subjects.length;
      case "tasks":
        return state.task.tasks.length;
      default:
        return "";
    }
  };

  return (
    <nav>
      <LinkList>
        {links.map((link) => (
          <NavigationLink key={link.path} to={link.path}>
            <LinkListItem>
              {/*Пришлось делать так, ведь покрасить иконку в зависимости от классе не удалось */}
              <img src={link.notSelectedIcon} alt="" />
              <img src={link.selectedIcon} alt="" />
              <span>{link.text}</span>
              <span>{getCount(link.text.toLowerCase())}</span>
            </LinkListItem>
          </NavigationLink>
        ))}
      </LinkList>
    </nav>
  );
};
