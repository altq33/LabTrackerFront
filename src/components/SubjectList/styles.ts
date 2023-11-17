import { styled } from "styled-components";

export const SubjectListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 20px;

  @media screen and (max-width: 1063px) {
    justify-content: center;
  }
`;
