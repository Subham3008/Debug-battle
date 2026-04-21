import React from "react";
import SearchInput from "../../../search/ui/components/searchInput";

const Navbar = () => {
  return (
    <div className="h-[10%] bg-black text-white px-10 py-5 flex justify-between items-center">
      <h1>Spotify</h1>
      <div className="flex gap-6 items-center">
        <p>Home Icon</p>
        <div>
          <SearchInput placeholder="Search for a song" type="text" />
        </div>
      </div>
      <div>Login</div>
    </div>
  );
};

export default Navbar;
