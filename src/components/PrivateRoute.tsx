import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { refresh } from "store/actionCreators/user";
import { AppDispatch, UserState } from "types/store";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const state = useSelector((state: { user: UserState }) => state.user);
  const dispatch: AppDispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return state.user ? children : <Navigate to="/" />;
};
