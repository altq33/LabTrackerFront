import { styled } from "styled-components";
import { Checked } from "types/styledComponentsProps";

export const Btn = styled.button<Checked>`
  border-radius: 5px;
  height: 30px;
  padding: 0 6px;
  border: 2px solid ${({ theme }) => theme.dullColors.border};
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background: ${(props) => (props.$isChecked ? "#57F" : "#FFF")};
  color: ${(props) => (props.$isChecked ? "#FFF" : "#57F")};
  cursor: pointer;
`;
