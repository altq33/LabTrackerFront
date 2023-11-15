import styled from "styled-components";

export const TeacherListItem = styled.li`
  background-color: ${({ theme }) => theme.dullColors.sectionsBg};
  height: 58px;
  width: 100%;
  padding: 8px;
  display: grid;
  grid-template-columns: auto repeat(3, 160px) auto;
  border: 1px solid ${({ theme }) => theme.dullColors.border};
  align-items: center;
  gap: 10px;
  cursor: pointer;
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

export const FullNameTitle = styled.h2`
  font-size: 20px;
  width: 160px;
  color: ${({ theme }) => theme.dullColors.gray2};
  font-weight: bold;
  overflow: hidden;
  word-wrap: none;
  text-overflow: ellipsis;
`;
