import React from "react";
import { useSearch } from "../../hooks/useSearch";
import { Search } from "lucide-react";
import SearchContainer from "./SearchContainer";

const SearchInput = ({ ...props }) => {
  const { handleSearch, searchSong, isVisible, handleNavigate } = useSearch();
  return (
    <div className="w-100 relative">
      <Search className="absolute left-90 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        onChange={handleSearch}
        className="w-full border border-gray-600 rounded-2xl p-3"
        {...props}
      />

      {isVisible && (
        <SearchContainer songs={searchSong} handleNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default SearchInput;
