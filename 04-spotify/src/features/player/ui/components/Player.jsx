import React from "react";
import { SkipBack, SkipForward, Play, Pause } from "lucide-react";

import { usePlayer } from "../../hooks/usePlayer";
import { playNextSong, playPreviousSong } from "../../state/musicSlice";

const Player = () => {
  const {
    togglePlayAndPause,
    isPlaying,
    dispatch,
    songTime,
    songDuration,
    formatTime,
    handleSeek,
  } = usePlayer();

  return (
    <div className="fixed left-1/2 -translate-x-1/2">
      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mb-3">
        <button onClick={() => dispatch(playPreviousSong())}>
          <SkipBack className="text-white" />
        </button>

        <button
          onClick={togglePlayAndPause}
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
        >
          {isPlaying ? <Pause fill="black" /> : <Play fill="black" />}
        </button>

        <button onClick={() => dispatch(playNextSong())}>
          <SkipForward className="text-white" />
        </button>
      </div>

      {/* Progress + Timer */}
      <div className="flex items-center gap-3 w-96">
        <span className="text-xs text-zinc-400">{formatTime(songTime)}</span>

        <input
          type="range"
          min="0"
          max={songDuration || 0}
          value={songTime}
          onChange={(e) => handleSeek(e.target.value)}
          className="w-full accent-white cursor-pointer"
        />

        <span className="text-xs text-zinc-400">
          {formatTime(songDuration)}
        </span>
      </div>
    </div>
  );
};

export default Player;
