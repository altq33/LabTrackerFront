import { styled } from "styled-components";
import bgSubmit from "assets/img/14571492_5495722 2.jpg";

export const RegistrationForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  align-content: flex-start;
  gap: 20px;
`;

export const AuthFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AuthFormInput = styled.input`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background: white;
  }

  width: 200px;
  padding: 5px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.dullColors.gray2};
  height: 50px;
  font-size: 16px;
  transition: 1s all ease;

  &:focus {
    transition: 1s all ease;
    border: 0;
    font-size: 20px;
    transform: scale(1.1) translateX(20px);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;

export const AuthFormSubmitBtn = styled.input`
  height: 50px;
  border-radius: 12px;
  width: 170px;
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.dullColors.white};
  font-size: 1.5rem;
  background-image: url(${'"' + bgSubmit + '"'});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  bottom: 0;
  transform: translateY(50%);
`;

export const ErrorBlock = styled.p`
  color: rgb(236, 49, 205);
  font-weight: bold;
  font-size: 16px;
  position: absolute;
  max-width: 70%;
  right: 5%;
  bottom: 30px;
`;
