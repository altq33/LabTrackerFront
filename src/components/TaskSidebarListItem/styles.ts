import { styled } from "styled-components";
import { IDProps, Sized } from "types/styledComponentsProps";

export const Container = styled.div`
  display: flex;
  width: 197px;
  align-items: center;
  gap: 8px;
`;

export const Line = styled.span<Sized>`
  height: 2px;
  width: ${(props) => props.$size}px;
`;

export const Icon = styled.div<IDProps>`
  width: 22px;
  height: 24.444px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-left: 6px;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${({ $id, theme }) =>
    Object.values(theme.brightColors)[$id.charCodeAt(0) % 6] + "5c"};
  ${Line} {
    background-color: ${({ $id, theme }) =>
      Object.values(theme.brightColors)[$id.charCodeAt(0) % 6]};
  }
`;

export const Title = styled.h2`
  color: #9896a3;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
