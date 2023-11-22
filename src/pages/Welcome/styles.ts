import { styled } from "styled-components";
import { BackgroundLineProps } from "types/styledComponentsProps";
export const FullscreenStack = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const FullscreenContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 1px;
  background: white;
  overflow: hidden;
  scroll-snap-align: start;
`;

export const FlexContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HelloTitle = styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(109deg, #ec31cd, #9ab6f5 62.94%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

export const Slogan = styled(HelloTitle).attrs({ as: "h2" })`
  font-size: 16px;
`;

export const Link = styled(Slogan).attrs({ as: "a" })`
  background: linear-gradient(109deg, #9ab6f5 46.18%, #ec31cd 62.94%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

export const Logo = styled.img`
  margin-top: 20px;
  width: 66px;
  height: 66px;
`;

export const StartButton = styled.button`
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

export const IconsContainer = styled(FlexContainer)`
  width: 250px;
  flex-direction: row;
  justify-content: space-between;
  gap: 49px;
  margin-top: 28px;
  height: auto;
`;

export const Icon = styled.img`
  width: 49px;
  height: 49px;
`;

export const BackgroundLine = styled.span<BackgroundLineProps>`
  z-index: 1;
  display: block;
  position: absolute;
  width: ${(props) => props.$width};
  border-bottom: 4px solid ${(props) => props.$color};
  transform: rotate(${(props) => props.$rotation || "-45deg"});
  top: ${(props) => props.$top || "auto"};
  left: ${(props) => props.$left || "auto"};
  right: ${(props) => props.$right || "auto"};
  bottom: ${(props) => props.$bottom || "auto"};

  @media (max-width: 785px) {
    display: none;
  }
`;
