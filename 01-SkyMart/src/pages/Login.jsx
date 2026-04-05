import React from "react";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default Login;
