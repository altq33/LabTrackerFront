import { useTypedSelector } from "hooks/useTypedSelector";
import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import { Navigate } from "react-router-dom";
import { refresh } from "store/actionCreators/user";
import { AppDispatch } from "types/store";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const state = useTypedSelector((state) => state.user);
  const dispatch: AppDispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return state.user ? children : <Navigate to="/" />;
};
