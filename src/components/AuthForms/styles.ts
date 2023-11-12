import { styled } from "styled-components";

export const FormContainer = styled.div`
  width: 55%;
  display: flex;
  height: 450px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  @media (max-width: 940px) {
    height: 80vh;
  }
  @media (max-width: 540px) {
    width: 80%;
  }
`;

export const LeftSideImage = styled.img`
  height: 100%;
  width: 40%;
  object-fit: cover;
  @media (max-width: 540px) {
    display: none;
  }
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  font-style: italic;
  font-weight: bold;
`;

export const RightSideContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  padding: 30px;
  gap: 30px;
  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const AlreadyRegBtn = styled.button`
  background: transparent;
  border: 0;
  text-decoration: underline;
  cursor: pointer;
  align-self: flex-start;
`;
