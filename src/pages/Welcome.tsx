import { styled } from "styled-components";
import logo from "assets/icons/logo.svg";
import folderIcon from "assets/icons/folder.svg";
import heartIcon from "assets/icons/heart.svg";
import codeIcon from "assets/icons/code.svg";
import { BackgroundLineProps } from "types/styledComponentsProps";
import { MouseEvent, useRef } from "react";

const FullscreenStack = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  scroll-snap-type: y mandatory;
`;

const FullscreenContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 1px;
  background: white;
  overflow: hidden;
  scroll-snap-align: start;
`;

const FlexContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HelloTitle = styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(109deg, #ec31cd 46.18%, #9ab6f5 62.94%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const Slogan = styled(HelloTitle).attrs({ as: "h2" })`
  font-size: 16px;
`;

const Link = styled(Slogan).attrs({ as: "a" })`
  background: linear-gradient(109deg, #9ab6f5 46.18%, #ec31cd 62.94%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const Logo = styled.img`
  margin-top: 20px;
  width: 66px;
  height: 66px;
`;

const StartButton = styled.button`
  margin-top: 24px;
  width: 153px;
  height: 42px;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(to right, #ec31cd, #9ab6f5) border-box;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: scale(1.05);
    transition: 0.4s;
  }
`;

const IconsContainer = styled(FlexContainer)`
  width: 250px;
  flex-direction: row;
  justify-content: space-between;
  gap: 49px;
  margin-top: 28px;
  height: auto;
`;

const Icon = styled.img`
  width: 49px;
  height: 49px;
`;

const BackgroundLine = styled.span<BackgroundLineProps>`
  z-index: 1;
  display: block;
  position: absolute;
  width: ${(props) => props.width};
  border-bottom: 4px solid ${(props) => props.color};
  transform: rotate(${(props) => props.rotation || "-45deg"});
  top: ${(props) => props.top || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  bottom: ${(props) => props.bottom || "auto"};

  @media (max-width: 785px) {
    display: none;
  }
`;

export const Welcome = () => {
  const secondBlock = useRef<HTMLDivElement | null>(null);

  const scrollNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (secondBlock) {
      secondBlock.current?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };

  return (
    <FullscreenStack>
      <FullscreenContainer>
        <BackgroundLine color="#ec31cd" width="150px" top="70px" left="0" />
        <BackgroundLine color="#D0D0FF" width="177px" top="170px" left="50px" />
        <BackgroundLine color="#ec31cd" width="97px" top="400px" left="250px" />
        <BackgroundLine
          color="#D0D0FF"
          width="177px"
          right="100px"
          top="100px"
        />
        <BackgroundLine
          color="#ec31cd"
          width="177px"
          right="150px"
          top="400px"
        />
        <BackgroundLine
          color="#D0D0FF"
          width="58px"
          right="400px"
          bottom="120px"
        />
        <BackgroundLine
          color="#ec31cd"
          width="103px"
          bottom="100px"
          left="55px"
        />

        <FlexContainer>
          <HelloTitle>Hello</HelloTitle>
          <Slogan>Good to see you here</Slogan>
          <Link href="https://LabTracker.com">LabTracker.com</Link>
          <Logo src={logo} />
          <StartButton onClick={scrollNext}>
            <Slogan>LET'S START</Slogan>
          </StartButton>
          <IconsContainer>
            <Icon src={folderIcon} />
            <Icon src={heartIcon} />
            <Icon src={codeIcon} />
          </IconsContainer>
        </FlexContainer>
      </FullscreenContainer>
      <FullscreenContainer ref={secondBlock}>Кекс</FullscreenContainer>
    </FullscreenStack>
  );
};
