import React from "react";
import { usePlayer } from "../../hooks/usePlayer";

const PlayingMusicInfo = () => {
  const { currentPlayingSong } = usePlayer();
  return (
    <div className="flex items-center gap-2">
      <div className="w-15">
        <img className="w-full" src={currentPlayingSong?.thumbnail} alt="thumbnail" />
      </div>
      <div className="flex flex-col">
        <h1>{currentPlayingSong?.title}</h1>
        <h1>{currentPlayingSong?.album}</h1>
        <h1>{currentPlayingSong?.artist}</h1>
      </div>
    </div>
  );
};

export default PlayingMusicInfo;
