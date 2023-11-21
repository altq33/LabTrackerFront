import styled from "styled-components";
import { Checked } from "types/styledComponentsProps";
import trueCheckIcon from "assets/icons/truecheck.svg";
import falseCheckIcon from "assets/icons/falsecheck.svg";

export const Container = styled.div`
  display: flex;
  width: 306px;
  padding: 12px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.dullColors.border};
  background: #f9f8ff;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 6px;
`;

export const Checkbox = styled.div<Checked>`
  width: 19px;
  height: 19px;
  cursor: pointer;
  background-image: url(${(props) =>
    "'" + (props.isChecked ? trueCheckIcon : falseCheckIcon) + "'"});
`;

export const Name = styled.h2<Checked>`
  color: ${(props) => (props.isChecked ? "rgba(85, 119, 255, 0.8)" : "#000")};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: ${(props) =>
    props.isChecked ? "line-through" : "none"};
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.div`
  color: #bbbabe;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
