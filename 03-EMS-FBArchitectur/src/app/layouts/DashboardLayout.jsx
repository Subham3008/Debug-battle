import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../features/dashboard/components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
