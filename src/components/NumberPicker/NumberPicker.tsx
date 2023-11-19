import React from "react";
import * as S from "./styles";
import { NumberPickerProps } from "types/props";

export const NumberPicker: React.FC<NumberPickerProps> = React.memo(
  ({ value, onChange, style, max, min, readOnly, ...props }) => {
    const increment = () => {
      if (max && value + 1 > max) return;
      onChange(value + 1);
    };

    const decrement = () => {
      if (min && value - 1 < min) return;
      onChange(value - 1);
    };

    return (
      <S.Container style={style}>
        <S.NumberInput
          value={value}
          readOnly={readOnly}
          tabIndex={-1}
          {...props}
        />
        <S.BtnContainer className="buttons-container">
          <S.ChangeBtn type="button" onClick={increment}>
            +
          </S.ChangeBtn>
          <S.ChangeBtn type="button" onClick={decrement}>
            -
          </S.ChangeBtn>
        </S.BtnContainer>
      </S.Container>
    );
  },
);
