import { styled } from "styled-components";
import { Opened } from "types/styledComponentsProps";

export const SidebarContainer = styled.div<Opened>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: fixed;
  left: ${({ $isOpen }) => ($isOpen ? 0 : "-100%")};
  transition: 0.8s left ease;
  top: 0;
  width: 257px;
  background-color: ${({ theme }) => theme.dullColors.sectionsBg};
  padding: 30px 17px 22px;
  border-right: 1px solid ${({ theme }) => theme.dullColors.border};

  @media screen and (max-width: 624px) {
    padding: 0;
    width: 90px;
    padding-top: 30px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 30px;
  }
`;

export const LogoIcon = styled.img`
  width: 38px;
  height: 38px;

  @media screen and (max-width: 624px) {
    width: 48px;
    height: 48px;
  }
`;

export const LogoTitle = styled.h1`
  color: black;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 624px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 12.31px;
  align-items: center;
  align-self: flex-start;
  position: relative;
  left: 10px;
  margin-bottom: 35px;
  cursor: pointer;

  @media screen and (max-width: 624px) {
    align-self: center;
    left: 0;
  }
`;
