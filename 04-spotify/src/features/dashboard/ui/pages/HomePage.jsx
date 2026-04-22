import React, { useState } from "react";
import { allSongs } from "../../api/SongApi";
import SongCard from "../components/SongCard";

const HomePage = () => {
  const songs = allSongs();
  const [visibleCount, setVisibleCount] = useState(20);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };
  console.log(songs);

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {songs.slice(0, visibleCount).map((elem) => {
          return <SongCard song={elem} key={elem.id} />;
        })}
      </div>
      {visibleCount < songs.length && (
        <button
          onClick={loadMore}
          className="text-white rounded bg-green-500 mt-6 px-6 py-2"
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default HomePage;
