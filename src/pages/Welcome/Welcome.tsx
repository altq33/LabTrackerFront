import logo from "assets/icons/logo.svg";
import folderIcon from "assets/icons/folder.svg";
import heartIcon from "assets/icons/heart.svg";
import codeIcon from "assets/icons/code.svg";
import { MouseEvent, useRef } from "react";
import * as S from "./styles";
import { About } from "components/About";
import { AuthForms } from "components/AuthForms/AuthForms";

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
    <S.FullscreenStack>
      <S.FullscreenContainer>
        <S.BackgroundLine color="#ec31cd" width="150px" top="70px" left="0" />
        <S.BackgroundLine
          color="#D0D0FF"
          width="177px"
          top="170px"
          left="50px"
        />
        <S.BackgroundLine
          color="#ec31cd"
          width="97px"
          top="400px"
          left="250px"
        />
        <S.BackgroundLine
          color="#D0D0FF"
          width="177px"
          right="100px"
          top="100px"
        />
        <S.BackgroundLine
          color="#ec31cd"
          width="177px"
          right="150px"
          top="400px"
        />
        <S.BackgroundLine
          color="#D0D0FF"
          width="58px"
          right="400px"
          bottom="120px"
        />
        <S.BackgroundLine
          color="#ec31cd"
          width="103px"
          bottom="100px"
          left="55px"
        />

        <S.FlexContainer>
          <S.HelloTitle>Hello</S.HelloTitle>
          <S.Slogan>Good to see you here</S.Slogan>
          <S.Link href="https://LabTracker.com">LabTracker.com</S.Link>
          <S.Logo src={logo} />
          <S.StartButton onClick={scrollNext}>
            <S.Slogan>LET'S START</S.Slogan>
          </S.StartButton>
          <S.IconsContainer>
            <S.Icon src={folderIcon} />
            <S.Icon src={heartIcon} />
            <S.Icon src={codeIcon} />
          </S.IconsContainer>
        </S.FlexContainer>
      </S.FullscreenContainer>

      <S.FullscreenContainer ref={secondBlock}>
        <About />
      </S.FullscreenContainer>
      <S.FullscreenContainer>
        <AuthForms />
      </S.FullscreenContainer>
    </S.FullscreenStack>
  );
};
