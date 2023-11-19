import { styled } from "styled-components";
import btnBg from "assets/img/14571492_5495722 2.jpg";

export const Container = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
`;

export const NumberInput = styled.input`
  width: 60%;
  height: 100%;
  font-size: 1.2rem;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.dullColors.border};
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  &:focus {
    outline: none !important;
  }
`;

export const BtnContainer = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const ChangeBtn = styled.button`
  height: 50%;
  border: none;
  width: 100%;
  color: $textColor;
  background-color: $lightLongBreakColor;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-image: url(${"'" + btnBg + "'"});
  background-size: cover;
  background-repeat: no-repeat;
  &:first-child {
    border-top-right-radius: 7px;
    border-bottom: 0.25px solid white;
  }

  &:last-child {
    border-bottom-right-radius: 7px;
    border-top: 0.25px solid white;
  }
`;
