import { ListComponentProps } from "types/props";
import * as S from "./styles";
import { AugmentedTask } from "types/api";
import { AllTaskListItem } from "components/AllTaskListItem/AllTaskListItem";

export const AllTaskList: React.FC<ListComponentProps<AugmentedTask>> = ({
  data,
}) => {
  return (
    <S.List>
      {data.map((el) => (
        <AllTaskListItem {...el} />
      ))}
    </S.List>
  );
};
