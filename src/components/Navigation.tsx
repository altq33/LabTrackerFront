import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { NavigationProps } from "types/props";
import { NavigationLinkProps } from "types/styledComponentsProps";

const LinkList = styled.ul`
  width: 217px;
  display: flex;
  flex-direction: column;
  margin-bottom: 33px;
`;
// Дико извниняюсь за это, но мне было инетерсно решить это именно через before для иконки))
const NavigationLink = styled(NavLink)<NavigationLinkProps>`
  li {
    &::before {
      content: url(${({ notSelectedMarker }) => notSelectedMarker});
    }
  }
  &.active {
    li {
      &::before {
        content: url(${({ selectedMarker }) => selectedMarker});
      }
      background-color: ${({ theme }) => theme.brightColors.blue};
      color: ${({ theme }) => theme.dullColors.white};
    }
  }
`;

const LinkListItem = styled.li`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.dullColors.gray3};
  padding: 15px 13px;
  &::before {
    position: relative;
    top: 1.5px;
    margin-right: 8px;
  }
`;

export const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <LinkList>
      {links.map((link) => (
        <NavigationLink
          key={link.path}
          to={link.path}
          selectedMarker={link.selectedIcon}
          notSelectedMarker={link.notSelectedIcon}
        >
          <LinkListItem>{link.text}</LinkListItem>
        </NavigationLink>
      ))}
    </LinkList>
  );
};
