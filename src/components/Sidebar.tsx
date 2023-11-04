import { useState } from "react";
import { styled } from "styled-components";
import { SidebarContainerProps } from "types/styledComponentsProps";
import logoIcon from "assets/icons/logo.svg";
import { Navigation } from "./Navigation";
import { navLinksList } from "resources/resources";

const SidebarContainer = styled.div<SidebarContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  transition: 1.5s all ease;
  top: 0;
  width: 257px;
  background-color: ${({ theme }) => theme.dullColors.sectionsBg};
  padding: 30px 17px 22px;
  border-right: 1px solid ${({ theme }) => theme.dullColors.border};
`;

const LogoIcon = styled.img`
  width: 38px;
  height: 38px;
`;

const LogoTitle = styled.h1`
  color: black;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 12.31px;
  align-items: center;
  align-self: flex-start;
  position: relative;
  left: 10px;
  margin-bottom: 35px;
  cursor: pointer;
`;

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SidebarContainer isOpen={isOpen}>
        <LogoContainer onClick={onClose}>
          <LogoIcon src={logoIcon} alt="Pretty logo for you" />
          <LogoTitle>LabTracker</LogoTitle>
        </LogoContainer>
        <Navigation links={navLinksList} />
      </SidebarContainer>
    </div>
  );
};
