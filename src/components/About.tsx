import { styled } from "styled-components";
import logoIcon from "assets/icons/logo.svg";
import { HelloTitle } from "pages/Welcome/styles";
import abstractImg from "assets/img/—Pngtree—3d rotating abstract object stereo_5428828.png";
import { LogoContainer, LogoIcon, LogoTitle } from "./Sidebar/styles";

const ColumnFlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 10%;
  justify-content: space-between;

  @media screen and (max-width: 1090px) {
    flex-direction: column;
    justify-content: center;
  }
  ${HelloTitle} {
    @media screen and (max-width: 560px) {
      font-size: 60px;
    }
    @media screen and (max-width: 418px) {
      font-size: 40px;
    }
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 1090px) {
    width: 100%;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: black;
  max-width: 600px;
  line-height: 1.5;
`;

const AbstractImg = styled.img`
  width: 45%;
  @media screen and (max-width: 1090px) {
    display: none;
  }
`;

export const About = () => (
  <ColumnFlexContainer>
    <LeftColumn>
      <LogoContainer>
        <LogoIcon src={logoIcon} alt="Pretty logo for you" />
        <LogoTitle>LabTracker</LogoTitle>
      </LogoContainer>
      <HelloTitle>LabTracker organize your studies</HelloTitle>
      <Description>
        LabTracker is a comprehensive app designed for tracking and managing
        university labs, teachers, and subjects. It provides a user-friendly
        interface for organizing and scheduling lab activities, managing
        assignments, and tracking progress on various university works.
      </Description>
    </LeftColumn>
    <AbstractImg src={abstractImg} />
  </ColumnFlexContainer>
);
