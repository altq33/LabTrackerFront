import { styled } from "styled-components";
import { Colored } from "types/styledComponentsProps";
import addIcon from "assets/icons/addg.svg";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  width: calc(33.3% - 16px);
  @media screen and (max-width: 1000px) {
    width: calc(50% - 16px);
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  width: 100%;
  padding: 3px 0px 5px 0px;
  gap: 3px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.dullColors.border};
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
`;

export const Title = styled.h4`
  color: #82808f;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ColumnIcon = styled.div<Colored>`
  border-radius: 3px;
  width: 12px;
  height: 12px;
  background: ${(props) => props.$color};
`;

export const Add = styled.button`
  width: 16px;
  height: 16px;
  border: 0;
  background: transparent;
  background-image: url(${addIcon});
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
`;
