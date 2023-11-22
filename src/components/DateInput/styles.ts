import { styled } from "styled-components";

export const Input = styled.input`
  font-size: 20px;
  width: 165px;
  background-color: #7b68ee;
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;
  height: 35px;
  padding-left: 20px;
  cursor: pointer;

  &::placeholder {
    color: white;
  }
`;
