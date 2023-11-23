import { Cover } from "components/SubjectListItem/styles";
import { SubjectsContainer } from "pages/Subjects/styles";
import { coversBig } from "resources/resources";
import { css, styled } from "styled-components";
import deleteIcon from "assets/icons/delete-svgrepo-com.svg";

export const Container = styled(SubjectsContainer)`
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TopSideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  border: 0;
  background: transparent;
  background-image: url(${deleteIcon});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  flex-shrink: 0;
`;

export const FullCover = styled(Cover)`
  width: 100%;
  min-height: 196px;
  border-radius: 14px;
  overflow: hidden;
  color: white;
  display: flex;
  padding: 121px 35px 32px 32px;
  background-size: cover;
  background-position: center;
  ${({ $id }) => {
    const path = `/src/assets/img/${
      coversBig[$id.charCodeAt(0) % coversBig.length]
    }`;
    return css`
      background-image: url(${path});
    `;
  }}

  padding-top: 35px;
  height: auto;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Stats = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.h2`
  color: rgba(0, 0, 0, 0.4);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StatValue = styled.h3`
  flex-shrink: 0;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 420px) {
    font-size: 16px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
  }
`;
