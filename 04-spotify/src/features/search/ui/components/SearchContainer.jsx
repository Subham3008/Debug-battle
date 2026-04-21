import React from "react";

const SearchContainer = ({ songs }) => {
  return (
    <div className="h-100 w-100 absolute z-30 bg-gray-800 p-5 overflow-auto flex flex-col gap-2">
      {songs.map((elem) => {
        return <h1 className="text-xl font-semibold">{elem.title}</h1>;
      })}
    </div>
  );
};

export default SearchContainer;
