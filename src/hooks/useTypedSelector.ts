// eslint-disable-next-line import/named
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "types/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
