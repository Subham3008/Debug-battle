import React from "react";
import { Outlet } from "react-router";

const DashboardProtectedRoutes = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardProtectedRoutes;
