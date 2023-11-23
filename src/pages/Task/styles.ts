import { styled } from "styled-components";

export const FullInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const LeftSideList = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  width: 318px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 450px) {
    width: 100%;
    gap: 10px;
  }
  @media (max-width: 360px) {
    width: auto;
    gap: 10px;
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const IconMini = styled(Icon)`
  width: 16px;
  height: 16px;
`;

export const Title = styled.h2`
  color: #82808f;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 450px) {
    display: none;
  }
`;

export const NameContainer = styled.h2`
  display: flex;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  background: #e9e8ec;
`;

export const Date = styled.h2`
  color: #bbbbbe;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const RightSideContainer = styled.div`
  display: flex;
  width: 372.149px;
  flex-direction: column;
  gap: 6px;
`;

export const RightSideTitle = styled.h2`
  color: #4f4f4f;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Description = styled.p`
  color: #999;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 162%;
`;
