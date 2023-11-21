import { ListComponentProps } from "types/props";
import * as S from "./styles";
import { AugmentedTask } from "types/api";

export const AllTaskList: React.FC<ListComponentProps<AugmentedTask>> = ({
  data,
}) => {
  return (
    <S.List>
      {data.map((el) => (
        <div>{el.name}</div>
      ))}
    </S.List>
  );
};
