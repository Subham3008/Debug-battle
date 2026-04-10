import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Navbar />
      </header>
      <div className="min-h-[calc(100vh-4rem)]">
        <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
