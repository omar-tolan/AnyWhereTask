import { Navigate } from "react-router-dom";
import type { JSX } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return isAuth ? children : <Navigate to="/login" />;
};

export default RequireAuth;
