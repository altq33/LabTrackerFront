import styled from "styled-components";
import { TeacherAvatarProps } from "types/styledComponentsProps";

export const TeacherListItem = styled.li`
  background-color: ${({ theme }) => theme.dullColors.sectionsBg};
  height: 58px;
  width: 100%;
  padding: 8px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.dullColors.border};
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const TeacherAvatar = styled.div<TeacherAvatarProps>`
  height: 42px;
  width: 42px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${({ theme, id }) =>
    Object.values(theme.brightColors)[id.charCodeAt(0) % 6]};
  display: flex;
  color: white;
  font-size: 20px;
  align-items: center;
  justify-content: center;
`;

export const FullNameTitle = styled.h2`
  font-size: 20px;
  width: 160px;
  color: ${({ theme }) => theme.dullColors.gray2};
  font-weight: bold;
  overflow: hidden;
  word-wrap: none;
  text-overflow: ellipsis;
`;
