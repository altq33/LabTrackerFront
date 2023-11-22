import { styled } from "styled-components";
import { IDProps, Opened } from "types/styledComponentsProps";
import deleteIcon from "assets/icons/delete-1487-svgrepo-com.svg";

export const TeacherListItemContainer = styled.li<Opened>`
  position: relative;
  background-color: ${({ theme }) => theme.dullColors.sectionsBg};
  height: 58px;
  min-height: ${({ $isOpen }) => ($isOpen ? "300px" : "58px")};
  width: 100%;
  transition: all ease 0.5s;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.dullColors.border};
  justify-content: space-between;
`;
export const ClosedGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  min-height: 42px;
  align-items: center;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TeacherAvatar = styled.div<IDProps>`
  height: 42px;
  width: 42px;
  flex-shrink: 0;
  border-radius: 10px;
  // Красим аватарочку в зависимости от чаркода айдишника
  background-color: ${({ theme, $id }) =>
    Object.values(theme.brightColors)[$id.charCodeAt(0) % 6]};
  display: flex;
  color: white;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  @media (max-width: 470px) {
    display: none;
  }
`;

export const DropdownIcon = styled.img<Opened>`
  width: 30px;
  height: 30px;
  transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0")});
`;

export const FullNameTitle = styled.h2`
  font-size: 20px;
  width: 23%;
  color: ${({ theme }) => theme.dullColors.gray2};
  font-weight: bold;
  overflow: hidden;
  word-wrap: none;
  text-overflow: ellipsis;
  @media (max-width: 1290px) {
    width: 31%;
    &:nth-child(5) {
      display: none;
    }
  }
  @media (max-width: 1050px) {
    width: 47%;
    &:nth-child(4) {
      display: none;
    }
  }
  @media (max-width: 770px) {
    width: 100%;
    &:nth-child(2) {
      display: none;
    }
  }
`;
export const UnderFullNameTitle = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.dullColors.gray2};
  font-weight: bold;
  overflow: hidden;
  word-wrap: none;
  text-overflow: ellipsis;
`;

export const DeleteBtn = styled.button<Opened>`
  width: 30px;
  height: 30px;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-image: url(${deleteIcon});
  background-size: contain;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
