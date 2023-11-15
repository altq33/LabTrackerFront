import { PrivateRoute } from "components/PrivateRoute";
import { Sidebar } from "components/Sidebar/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router";
import { styled } from "styled-components";
import {
  OpenBtnProps,
  WorkSpaceWrapperProps,
} from "types/styledComponentsProps";
import logoIcon from "assets/icons/logo.svg";

const WorkSpaceWrapper = styled.div<WorkSpaceWrapperProps>`
  width: 100%;
  height: 100%;
  padding-left: ${({ isOpen }) => (isOpen ? "257px" : 0)};
  transition: 0.7s padding-left ease;
  @media screen and (max-width: 624px) {
    padding-left: ${({ isOpen }) => (isOpen ? "90px" : 0)};
  }
`;

const OpenBtn = styled.button<OpenBtnProps>`
  width: 50px;
  height: 50px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ theme }) => theme.dullColors.sectionsBg};
  background-image: url(${"'" + logoIcon + "'"});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  left: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  transition: 1s left ease;
  z-index: 2;
  border: 2px solid ${({ theme }) => theme.dullColors.border};
`;

export const WorkSpaceLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <PrivateRoute>
      <WorkSpaceWrapper isOpen={isOpen}>
        <OpenBtn isOpen={!isOpen} onClick={() => setIsOpen(true)} />
        <Sidebar
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
        />
        <Outlet />
      </WorkSpaceWrapper>
    </PrivateRoute>
  );
};
