/* eslint-disable prettier/prettier */
import { NavLink } from "react-router-dom";
import { covers } from "./../../resources/resources";
import { css, styled } from "styled-components";
import { Colored, IDProps } from "types/styledComponentsProps";

export const SubjectListItemContainer = styled(NavLink)`
  display: flex;
  width: 248px;
  padding: 10px 10px 22px 10px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.dullColors.border};
  border-radius: 10px;
  @media screen and (max-width: 420px) {
    width: 170px;
    padding: 5px 5px 12px 5px;
  }
`;

export const Cover = styled.div<IDProps>`
  max-width: 100%;
  min-width: 100%;
  height: 112px;
  flex-shrink: 0;
  border-radius: 6px;
  ${({ $id }) => {
    const path = `'/src/assets/img/${
      covers[$id.charCodeAt(0) % covers.length]
    }'`;
    return css`
      background-image: url(${path});
    `;
  }}
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 420px) {
    width: 170px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 7px;
`;

export const TasksCount = styled.div<IDProps>`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 24px;
  color: white;
  background-color: ${({ theme, $id }) =>
    Object.values(theme.brightColors)[$id.charCodeAt(0) % 6]};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Name = styled.h3`
  width: 88%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #26252b;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const TeacherName = styled.h4`
  width: 88%;
  color: #56555c;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  opacity: 0.7;
`;

export const AddedInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3px;
`;

export const Badge = styled.div<Colored>`
  padding: 4px 10px;
  border-radius: 33px;
  background-color: ${({ $color }) => $color + "5c"};
  color: ${({ $color }) => $color};
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
