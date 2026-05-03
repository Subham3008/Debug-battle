import React from "react";
import { House, LogIn } from "lucide-react";
import { useDashboard } from "../../hooks/useDashboard";
import SearchInput from "@/features/search/ui/components/SearchInput";

const Navbar = () => {
  const { navigate } = useDashboard();
  return (
    <div className="h-[10%] bg-black text-white px-10 py-5 flex justify-between items-center">
      <h1>Spotify</h1>
      <div className="flex gap-6 items-center">
        <House
          className="cursor-pointer"
          onClick={() => navigate("/dashboard")}
        />
        <div>
          <SearchInput placeholder="Search for a song" type="text" />
        </div>
      </div>
      <div className="cursor-pointer">
        <LogIn />
      </div>
    </div>
  );
};

export default Navbar;
