import { Cover } from "components/SubjectListItem/styles";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavigationLink = styled(NavLink)`
  width: 100%;
  height: 32px;
`;

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 6px;
  @media screen and (max-width: 624px) {
    justify-content: center;
  }
`;

export const Badge = styled(Cover)`
  min-width: 32px;
  max-width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 50%;
  background-size: cover;
`;

export const Title = styled.h2`
  color: #888793;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (max-width: 624px) {
    display: none;
  }
`;

export const Count = styled.h2`
  color: #9896a3;
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 100%;
  @media screen and (max-width: 624px) {
    text-align: left;
    width: auto;
  }
`;
