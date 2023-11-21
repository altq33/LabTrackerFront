import { styled } from "styled-components";
import addIcon from "assets/icons/add-square-svgrepo-com.svg";

export const TeachersContainer = styled.div`
  position: relative;
  display: flex;
  width: 75%;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.dullColors.border};
  background: #fff;
  padding: 10px;
  align-items: flex-start;
  gap: 15px;
`;

export const AddBtn = styled.button`
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.dullColors.gray3};
  font-size: 28px;
  cursor: pointer;
  &:before {
    content: "";
    display: inline-block;
    position: relative;
    top: 5px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    background-image: url(${'"' + addIcon + '"'});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
