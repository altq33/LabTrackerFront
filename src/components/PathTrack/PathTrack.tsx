import React from "react";
import * as S from "./styles";
import { PathTrackProps } from "types/props";
import slideIcon from "assets/icons/arrow1.svg";
import arrowIcon from "assets/icons/arrow2.svg";

export const PathTrack: React.FC<PathTrackProps> = ({
  mainId,
  secondaryId,
  mainTitle,
  secondaryTitle,
  category,
  icon,
}) => (
  <S.Container>
    <S.TopName>
      <S.TopColorIndicator id={mainId}></S.TopColorIndicator>
      <S.TopTitle>{mainTitle}</S.TopTitle>
    </S.TopName>
    <S.BottomContainer>
      <S.Slide src={slideIcon} alt="" />
      <S.Entities>
        <S.EntityContainer>
          <S.Icon src={icon} />
          <S.EntityName>{category}</S.EntityName>
        </S.EntityContainer>
        <img src={arrowIcon} />
        <S.EntityContainer>
          <S.ColorEntityIndicator id={secondaryId}>
            <S.InnerIndicator />
          </S.ColorEntityIndicator>
          <S.EntityName>{secondaryTitle}</S.EntityName>
        </S.EntityContainer>
      </S.Entities>
    </S.BottomContainer>
  </S.Container>
);
