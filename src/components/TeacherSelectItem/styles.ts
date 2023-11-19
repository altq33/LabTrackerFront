import { styled } from "styled-components";
import { SelectItemContainerProps } from "types/styledComponentsProps";

export const Container = styled.div<SelectItemContainerProps>`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  padding: 5px 0;
  color: ${({ theme, isFocused, isSelected }) =>
    isFocused || isSelected ? theme.dullColors.white : "black"};
  background-color: ${({ theme, isFocused, isSelected }) =>
    isFocused || isSelected ? theme.brightColors.purple : "white"};
`;

export const Title = styled.h2`
  font-size: 20px;
  width: 100%;
  font-weight: bold;
  overflow: hidden;
  word-wrap: none;
  text-overflow: ellipsis;
`;
