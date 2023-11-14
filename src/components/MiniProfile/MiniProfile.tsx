import * as S from "./styles";
import avatar from "assets/img/avatar.png";
import { MiniProfileProps } from "types/props";

export const MiniProfile: React.FC<MiniProfileProps> = ({ link, name }) => {
  return (
    <S.MiniProfileContainer>
      <S.LeftSideContainer>
        <S.Avatar src={avatar} />
        <S.Name>{name}</S.Name>
      </S.LeftSideContainer>
      <S.SettingsIcon to={link} />
    </S.MiniProfileContainer>
  );
};
