import { departure } from "pages/Profile/styles";
import { styled } from "styled-components";

export const TeachersContainer = styled.div`
  position: relative;
  animation: ${departure} 0.65s linear;
  display: flex;
  width: 50%;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.dullColors.border};
  background: #fff;
  padding: 10px;
`;
