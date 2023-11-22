import { AddInputSubject } from "components/SubjectsForm/styles";
import { styled } from "styled-components";

export const Area = styled(AddInputSubject).attrs({ as: "textarea" })`
  width: 50%;
  resize: none;
  height: 100px;
`;
