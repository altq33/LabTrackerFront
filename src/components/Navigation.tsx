import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { NavigationProps } from "types/props";

const LinkList = styled.ul`
  width: 217px;
  display: flex;
  flex-direction: column;
  margin-bottom: 33px;
`;

const NavigationLink = styled(NavLink)`
  &.active {
    li {
      background-color: ${({ theme }) => theme.brightColors.blue};
      color: ${({ theme }) => theme.dullColors.white};
      img {
        display: none;
        &:last-child {
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
    &:last-child {
      display: none;
    }
  }
`;

export const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav>
      <LinkList>
        {links.map((link) => (
          <NavigationLink key={link.path} to={link.path}>
            <LinkListItem>
              {/*Пришлось делать так, ведь покрасить иконку в зависимости от классе не удалось */}
              <img src={link.notSelectedIcon} alt="" />
              <img src={link.selectedIcon} alt="" />
              {link.text}
            </LinkListItem>
          </NavigationLink>
        ))}
      </LinkList>
    </nav>
  );
};
