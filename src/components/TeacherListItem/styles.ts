import styled from "styled-components";

export const TeacherListItem = styled.li`
  background-color: ${({ theme }) => theme.dullColors.sectionsBg};
  height: 58px;
  padding: 8px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.dullColors.border};
`;

export const TeacherAvatar = styled.div`
  height: 42px;
  width: 42px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    Object.values(theme.brightColors)[Math.floor(Math.random() * 6)]};
  display: flex;
  color: white;
  font-size: 20px;
  align-items: center;
  justify-content: center;
`;
