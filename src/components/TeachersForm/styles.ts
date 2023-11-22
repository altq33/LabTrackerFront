import { styled } from "styled-components";
import { Opened } from "types/styledComponentsProps";
import closeIcon from "assets/icons/close-square-svgrepo-com.svg";
import submitBg from "assets/img/14571492_5495722 3.jpg";
import { ErrorBlock } from "components/RegForm/styles";

export const FormContainer = styled.div<Opened>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  transition: 1s all ease;
  transform: translate(-50%, 50%);
  bottom: ${(props) => (props.$isOpen ? "50%" : "-100%")};
  width: 50%;
  height: 80vh;
  background-color: ${({ theme }) => theme.dullColors.sectionsBg};
  border: 1px solid ${({ theme }) => theme.dullColors.border};
  z-index: 3;
  padding: 10px;
  @media screen and (max-width: 530px) {
    font-size: 20px;
    width: 70%;
  }
`;

export const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  background-image: url(${closeIcon});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  border: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  transition: 0.4s all ease;
  &:hover {
    transition: 0.4s all ease;
    transform: scale(1.05) rotate(180deg);
  }
`;

export const AddForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 15px;
`;

export const FormTitle = styled.h2`
  color: black;
  font-size: 40px;
  @media screen and (max-width: 530px) {
    font-size: 20px;
  }
`;

export const Label = styled.label`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 530px) {
    font-size: 16px;
  }
`;

export const AddInput = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.dullColors.gray2};
  height: 50px;
  font-size: 17px;
  &:focus {
    border: 2px solid ${({ theme }) => theme.brightColors.pink};
  }
`;

export const Submit = styled.input`
  border: 0;
  width: 30%;
  height: 50px;
  border-radius: 10px;
  background-image: url(${"'" + submitBg + "'"});
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  align-self: center;
  font-size: 20px;
  @media screen and (max-width: 530px) {
    width: 80%;
  }
  cursor: pointer;
`;

export const ErrorContainer = styled(ErrorBlock)`
  right: auto;
  left: 5px;
  bottom: 5px;
  max-width: 100%;
`;
