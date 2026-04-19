import React from "react";
import { allSongs } from "../../api/SongApi";
import SongCard from "../components/SongCard";

const HomePage = () => {
  const songs = allSongs();
  console.log(songs);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {songs.map((elem) => {
        return <SongCard song={elem} />;
      })}
    </div>
  );
};

export default HomePage;
