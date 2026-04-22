import React from "react";
import { useSearch } from "../../hooks/useSearch";
import SearchContainer from "./searchContainer";

const SearchInput = ({ ...props }) => {
  const { handleSearch, searchSong, isVisible, handleNavigate } = useSearch();
  return (
    <div className="w-100 ">
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
