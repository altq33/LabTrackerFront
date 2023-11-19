import { AddInput, Submit } from "components/TeachersForm/styles";
import { styled } from "styled-components";
import submitBg from "assets/img/14571492_5495722 2.jpg";

export const SubmitSubject = styled(Submit)`
  background-image: url(${"'" + submitBg + "'"});
`;

export const AddInputSubject = styled(AddInput)`
  &:focus {
    border: 2px solid ${({ theme }) => theme.brightColors.purple};
  }
`;
