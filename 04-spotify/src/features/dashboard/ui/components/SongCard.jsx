import React from "react";
import { useDashboard } from "../../hooks/useDashboard";
import { playNewSong } from "../../../player/state/musicSlice";

const SongCard = ({ song }) => {
  const { dispatch } = useDashboard();

  return (
    <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition duration-300 group cursor-pointer">
      {/* Image */}
      <div className="relative">
        <img
          src={song.thumbnail}
          alt={song.title}
          className="w-full h-48 object-cover rounded-md"
        />

        {/* Play Button */}
        <button
          onClick={() => dispatch(playNewSong(song))}
          className="absolute bottom-3 right-3 bg-green-500 p-3 rounded-full shadow-lg 
          opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 
          transition-all duration-300 hover:scale-110"
        >
          ▶
        </button>
      </div>

      {/* Text */}
      <div className="mt-4">
        <h2 className="text-white font-semibold text-md truncate">
          {song.title}
        </h2>

        <p className="text-gray-400 text-sm truncate">{song.artist}</p>
      </div>

      {/* Hidden Audio */}
      <audio>
        <source src={song.url} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default SongCard;
