import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { UserState } from "types/store";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const state = useSelector((state: { user: UserState }) => state.user);
  return state.user ? children : <Navigate to="/" />;
};
