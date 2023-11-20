import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavigationLink = styled(NavLink)``;

export const Container = styled.li`
  display: flex;
  width: 100%;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.dullColors.border};
  background: #fff;
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
  width: 100%;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

export const Icon = styled.img`
  width: 22px;
  height: 22px;
`;

export const Name = styled.h2`
  color: #56555c;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const PriorityContainer = styled.h2`
  color: #9d9ba1;
  display: flex;
  padding: 7px 8px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 7px;
  background: #e9e8ec;
`;
