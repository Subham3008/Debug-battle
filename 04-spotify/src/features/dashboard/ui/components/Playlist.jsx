import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { playNewSong } from "../../../player/state/musicSlice";
import { removeSongFromPlaylist } from "../../../dashboard/state/playlistSlice";

const Playlist = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { playlists } = useSelector((store) => store.playlist);

  const safePlaylists = playlists || [];

  const playlist = safePlaylists.find((p) => p.id === Number(id));

  if (!playlist) {
    return <p className="text-white p-6">Playlist not found</p>;
  }

  const handlePlaySong = (song) => {
    dispatch(playNewSong(song));
    navigate(`/dashboard/details/${song.id}`);
  };

  console.log("PLAYLIST:", playlist);
  console.log("SONGS:", playlist.songs);

  return (
    <div className="text-white p-6">
      {/* Header */}
      <div className="flex items-end gap-6 mb-8">
        {/* Cover */}
        <div
          className="w-48 h-48 bg-linear-to-br from-purple-600 to-blue-500 
                        flex items-center justify-center text-4xl font-bold rounded-md"
        >
          {playlist.name?.charAt(0)}
        </div>

        {/* Info */}
        <div>
          <p className="text-sm uppercase text-gray-400">Playlist</p>
          <h1 className="text-4xl font-bold">{playlist.name}</h1>
          <p className="text-gray-400 mt-2">
            {playlist.songs?.length || 0} songs
          </p>

          {/* Play Button */}
          <button
            onClick={() => {
              if (playlist.songs?.length > 0) {
                handlePlaySong(playlist.songs[0]);
              }
            }}
            className="mt-4 bg-green-500 text-black px-6 py-2 rounded-full 
                       font-semibold hover:scale-105 transition"
          >
            ▶ Play
          </button>
        </div>
      </div>

      {/* Header row */}
      <div className="grid grid-cols-12 text-gray-400 text-sm border-b border-gray-700 pb-2 mb-3">
        <p className="col-span-1">#</p>
        <p className="col-span-6">Title</p>
        <p className="col-span-3">Album</p>
        <p className="col-span-2 text-right">Action</p>
      </div>

      {/* Songs */}
      <div className="flex flex-col gap-2">
        {(playlist.songs || [])
          .filter((song) => song)
          .map((song, index) => (
            <div
              key={song.id}
              className="grid grid-cols-12 items-center p-2 rounded-md 
                   hover:bg-[#2a2a2a] cursor-pointer"
              onClick={() => handlePlaySong(song)}
            >
              <p className="col-span-1 text-gray-400">{index + 1}</p>

              <div className="col-span-6 flex items-center gap-3">
                <img
                  src={song?.thumbnail}
                  alt={song?.title}
                  className="w-10 h-10 rounded-md"
                />
                <div>
                  <p className="font-semibold">{song?.title}</p>
                  <p className="text-sm text-gray-400">{song?.artist}</p>
                </div>
              </div>

              <p className="col-span-3 text-gray-400">{song?.album}</p>

              <div
                className="col-span-2 text-right"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() =>
                    dispatch(
                      removeSongFromPlaylist({
                        playlistId: playlist.id,
                        songId: song.id,
                      }),
                    )
                  }
                  className="text-red-400 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Empty state */}
      {(!playlist.songs || playlist.songs.length === 0) && (
        <p className="text-gray-400 mt-4">No songs in this playlist.</p>
      )}
    </div>
  );
};

export default Playlist;
