import { forwardRef } from "react";
import * as S from "./styles";
import { DateInputProps } from "types/props";

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ value, onClick, placeholder }, ref) => (
    <S.Input
      placeholder={placeholder}
      onClick={onClick}
      ref={ref}
      value={value}
      readOnly
    />
  ),
);
