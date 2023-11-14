import { UserState } from "types/store";

export const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  success: false,
};
