import * as S from "./styles";
import { FilterMenuProps } from "types/props";

export const FilterMenu: React.FC<FilterMenuProps> = ({
  label,
  onAppend,
  onRemove,
  isChecked,
}) => {
  const onCheck = () => {
    if (isChecked) {
      onRemove();
    } else {
      onAppend();
    }
  };

  return (
    <S.Btn $isChecked={isChecked} onClick={onCheck}>
      {label}
    </S.Btn>
  );
};
