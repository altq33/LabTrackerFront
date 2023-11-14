import { styled } from "styled-components";
import settingIcon from "assets/icons/Setting.svg";
import { NavLink } from "react-router-dom";

export const MiniProfileContainer = styled.div`
  width: 207px;
  padding: 8px;
  padding-right: 19px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.dullColors.border};
  background: #fff;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSideContainer = styled.div`
  display: flex;
  gap: 8px;
  height: 100%;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.brightColors.blue};
  border-radius: 5px;
`;

export const Name = styled.h3`
  color: #53515b;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SettingsIcon = styled(NavLink)`
  cursor: pointer;
  display: block;
  width: 22px;
  height: 22px;
  background-image: url(${'"' + settingIcon + '"'});
`;
