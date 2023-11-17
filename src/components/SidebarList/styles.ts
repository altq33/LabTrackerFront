import { styled } from "styled-components";
import addIcon from "assets/icons/addsbtn.svg";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 10px;
  height: 46px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.dullColors.border};
  @media screen and (max-width: 624px) {
    padding: 0;
    flex-direction: column;
    height: auto;
  }
`;

export const Title = styled.h2`
  color: #d3d2dc;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 290%;
  text-transform: uppercase;
`;

export const AddBtn = styled.button`
  flex-shrink: 0;
  background: transparent;
  cursor: pointer;
  border: 0;
  width: 16px;
  height: 16px;
  background-image: url(${'"' + addIcon + '"'});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  gap: 10px;
`;
