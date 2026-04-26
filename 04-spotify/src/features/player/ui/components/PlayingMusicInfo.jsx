import React from "react";
import { usePlayer } from "../../hooks/usePlayer";

const PlayingMusicInfo = () => {
  const { currentPlayingSong } = usePlayer();

  return (
    <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto">
      {/* Album Cover */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0">
        <img
          className="object-cover rounded-md"
          src={currentPlayingSong?.thumbnail}
          alt={currentPlayingSong?.title}
        />
      </div>

      {/* Song Info */}
      <div className="flex flex-col min-w-0">
        <h1 className="text-sm sm:text-base md:text-lg font-medium truncate">
          {currentPlayingSong?.title}
        </h1>

        <p className="text-xs text-gray-400 truncate">
          {currentPlayingSong?.album}
        </p>

        <p className="hidden sm:block text-xs md:text-sm truncate">
          {currentPlayingSong?.artist}
        </p>
      </div>
    </div>
  );
};

export default PlayingMusicInfo;
