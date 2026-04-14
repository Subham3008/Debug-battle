import React from "react";
import { Navigate, Outlet } from "react-router";
import { useContextAuth } from "../../shared/hooks/useContextAuth";

const ProtectedRoutes = () => {
  const { loggedInAdmin } = useContextAuth();
  console.log("Protected", loggedInAdmin);

  if (!loggedInAdmin) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
