import * as S from "./styles";
import avatar from "assets/img/avatar.png";
import usernameIcon from "assets/icons/@.svg";
import { useSelector, useDispatch } from "react-redux";
import { UserActionsType, UserState } from "types/store";

export const Profile = () => {
  const state = useSelector((state: { user: UserState }) => state.user);
  const dispatch = useDispatch();

  const logout = () => dispatch({ type: UserActionsType.LOGOUT });

  return (
    <S.ProfileContainer>
      <S.LogoutBtn onClick={logout} />
      <S.ProfileAvatar src={avatar} />
      <S.Username>
        <S.UsernameIcon src={usernameIcon} />
        <S.UsernameTitle>{state.user?.username}</S.UsernameTitle>
      </S.Username>
      <S.EmailTitle>| {state.user?.email} |</S.EmailTitle>
      <S.CreatedTitle>
        {new Date(state.user?.created || "").toDateString()}
      </S.CreatedTitle>
    </S.ProfileContainer>
  );
};
