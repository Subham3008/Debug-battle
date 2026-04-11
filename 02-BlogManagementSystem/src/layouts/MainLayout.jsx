import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b border-black/20 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <Navbar />
      </header>
      <div className="min-h-[calc(100vh-4rem)]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
