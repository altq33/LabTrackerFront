import { useState } from "react";
import * as S from "./styles";
import logoIcon from "assets/icons/logo.svg";
import { Navigation } from "../Navigation";
import { navLinksList } from "resources/resources";
import { MiniProfile } from "components/MiniProfile/MiniProfile";
import { useSelector } from "react-redux";
import { UserState } from "types/store";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const state = useSelector((state: { user: UserState }) => state.user);

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
        <MiniProfile name={state.user?.username ?? ""} link="#" />
      </S.SidebarContainer>
    </div>
  );
};
