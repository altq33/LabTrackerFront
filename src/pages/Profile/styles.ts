import { Avatar } from "components/MiniProfile/styles";
import { keyframes, styled } from "styled-components";
import logoutIcon from "assets/icons/logout-3-svgrepo-com.svg";

export const departure = keyframes`
    from {
        top: -100%;
    }
    to {
        top: 0;
    }
`;

export const ProfileContainer = styled.div`
  position: relative;
  animation: ${departure} 0.65s linear;
  display: inline-flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.dullColors.border};
  background: #fff;
  align-items: center;
  gap: 30px;
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 480px) {
    width: 100%;
    min-width: 100px;
  }
`;

export const LogoutBtn = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  border: 0;
  cursor: pointer;
  background: transparent;
  background-image: url(${logoutIcon});
  position: absolute;
  right: 10px;
  top: 10px;
  background-size: contain;
`;

export const ProfileAvatar = styled(Avatar)`
  width: 200px;
  height: 200px;
  @media (max-width: 480px) {
    width: 60%;
    height: auto;
  }
`;

export const Username = styled.div`
  padding: 6px;
  display: flex;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  background: ${({ theme }) => theme.brightColors.yellow};
  max-width: 90%;
`;

export const UsernameIcon = styled.img`
  width: 46px;
  height: 46px;
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

export const UsernameTitle = styled.h2`
  color: #9d9ba1;
  font-size: 44px;
  text-transform: uppercase;
  font-style: bold;
  font-weight: 500;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const EmailTitle = styled.h3`
  color: ${({ theme }) => theme.brightColors.pink};
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const CreatedTitle = styled.h4`
  color: ${({ theme }) => theme.brightColors.green};
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
