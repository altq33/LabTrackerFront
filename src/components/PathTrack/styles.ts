import { styled } from "styled-components";
import { IDProps, TopColorIndicatorProps } from "types/styledComponentsProps";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TopColorIndicator = styled.div<TopColorIndicatorProps>`
  width: 21px;
  height: 21px;
  border-radius: 6px;
  background: ${({ theme, id }) =>
    Object.values(theme.brightColors)[id.charCodeAt(0) % 6]};
`;

export const TopTitle = styled.h2`
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const BottomContainer = styled.div`
  display: flex;
  padding-left: 9px;
  gap: 5px;
  align-items: flex-end;
`;

export const Entities = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  position: relative;
  top: 7px;
`;

export const EntityContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const ColorEntityIndicator = styled.div<IDProps>`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  background: ${({ theme, id }) =>
    Object.values(theme.brightColors)[id.charCodeAt(0) % 6]};
`;

export const InnerIndicator = styled.div`
  width: 4px;
  height: 4px;
  background: white;
`;

export const EntityName = styled.h2`
  color: #82808f;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Slide = styled.img`
  position: relative;
  top: 1px;
`;
