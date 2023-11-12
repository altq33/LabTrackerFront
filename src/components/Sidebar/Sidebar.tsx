import { useState } from "react";
import * as S from "./styles";
import logoIcon from "assets/icons/logo.svg";
import { Navigation } from "../Navigation";
import { navLinksList } from "resources/resources";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <S.SidebarContainer isOpen={isOpen}>
        <S.LogoContainer onClick={onClose}>
          <S.LogoIcon src={logoIcon} alt="Pretty logo for you" />
          <S.LogoTitle>LabTracker</S.LogoTitle>
        </S.LogoContainer>
        <Navigation links={navLinksList} />
      </S.SidebarContainer>
    </div>
  );
};
