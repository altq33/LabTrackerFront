import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { NavigationProps } from "types/props";

const LinkList = styled.ul`
  width: 217px;
  display: flex;
  flex-direction: column;
`;

const LinkListItem = styled.li``;

export const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <LinkList>
      {links.map((link) => (
        <NavLink key={link.path} to={link.path}>
          <li>{link.text}</li>
        </NavLink>
      ))}
    </LinkList>
  );
};
