import { useState } from "react";
import { allSongs } from "../../dashboard/api/SongApi";

export const useSearch = () => {
  const songs = allSongs();
  const [searchValue, setSearchValue] = useState(null);
  const [searchSong, setSearchSong] = useState([]);
  console.log(searchValue);

  let timer;
  const handleSearch = (e) => {
    let value = e.target.value;
    clearTimeout(timer)
    timer = setTimeout(() => {
      setSearchValue(value);
      const filteredSong = songs.filter((elem) =>
        elem.title.toLowerCase().includes(value.toLowerCase()),
      );
      console.log("Running...");

      setSearchSong(filteredSong);
    }, 2000);
  };

  return {
    handleSearch,
    searchValue,
    searchSong,
  };
};
