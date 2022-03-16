import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const PrivateRoutes = () => {
  const location = useLocation();

  const authLogin = JSON.parse(localStorage.getItem("userDetails"));

  return authLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
