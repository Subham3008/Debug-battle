import React from "react";
import { useParams } from "react-router";
import { useDashboard } from "../../hooks/useDashboard";

const ArtistSongPage = () => {
  const { name } = useParams();

  const { queue, songs, handleNavigate } = useDashboard();

  // slug → normal name
  const formattedName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // queue first
  const songsList = queue?.length ? queue : songs;

  // filter songs by artist
  const filteredSongs = songsList.filter(
    (song) => song.artist === formattedName,
  );

  return (
    <div className="p-6 text-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{formattedName}</h1>
        <p className="text-gray-400 text-sm">{filteredSongs.length} Songs</p>
      </div>

      {/* Songs */}
      <div className="flex flex-col gap-3">
        {filteredSongs.map((song) => (
          <div
            key={song.id}
            onClick={() => handleNavigate(song)}
            className="flex items-center gap-4 p-3 
                       bg-[#1e1e1e] rounded-md 
                       hover:bg-[#2a2a2a] cursor-pointer 
                       transition"
          >
            {/* Thumbnail */}
            <img
              src={song.thumbnail}
              alt={song.title}
              className="w-12 h-12 rounded-md object-cover"
            />

            {/* Info */}
            <div className="flex-1">
              <p className="font-semibold">{song.title}</p>
              <p className="text-sm text-gray-400">{song.album}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredSongs.length === 0 && (
        <p className="text-gray-400 mt-4">No songs found for this artist.</p>
      )}
    </div>
  );
};

export default ArtistSongPage;
