import React from "react";
import { useSearch } from "../../hooks/useSearch";

const SearchContainer = ({ songs, handleNavigate }) => {
  return (
    <div className="h-100 w-100 absolute z-30 bg-gray-800 p-5 overflow-auto flex flex-col gap-2 mt-1 rounded">
      {songs.map((elem) => {
        return (
          <div
            key={elem.id}
            onClick={() => handleNavigate(elem)}
            className="flex gap-2 items-center border-b cursor-pointer hover:bg-gray-600"
          >
            <img className="h-10" src={elem.thumbnail} alt={elem.title} />
            <h1 className="text-md font-semibold">{elem.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default SearchContainer;
