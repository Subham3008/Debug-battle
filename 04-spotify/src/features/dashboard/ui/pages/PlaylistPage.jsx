import { useNavigate } from "react-router";
import PlaylistMenu from "@/components/local/PlaylistMenu";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { renamePlaylist } from "@/features/dashboard/state/playlistSlice";

const PlaylistList = ({ playlists = [] }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState("");

  const handleRename = (playlistId) => {
    if (!newName.trim()) return;

    dispatch(
      renamePlaylist({
        playlistId,
        newName,
      }),
    );

    setEditingId(null);
  };

  return (
    <div className="h-95 overflow-y-auto px-1 overflow-x-hidden">
      <h2 className="text-white font-semibold text-lg mb-4">Playlists</h2>

      <div className="flex flex-col gap-2">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="p-2 bg-[#1e1e1e] rounded hover:bg-[#242323] 
                       flex items-center justify-between group"
          >
            {editingId === playlist.id ? (
              <input
                value={newName}
                autoFocus
                onChange={(e) => setNewName(e.target.value)}
                onBlur={() => {
                  if (newName.trim()) {
                    dispatch(
                      renamePlaylist({
                        playlistId: playlist.id,
                        newName,
                      }),
                    );
                  }
                  setEditingId(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (newName.trim()) {
                      dispatch(
                        renamePlaylist({
                          playlistId: playlist.id,
                          newName,
                        }),
                      );
                    }
                    setEditingId(null);
                  }

                  if (e.key === "Escape") {
                    setEditingId(null);
                  }
                }}
                className="bg-transparent outline-none text-white flex-1 border-gray-500 focus:border-white transition"
              />
            ) : (
              <>
                <p
                  onClick={() => navigate(`/dashboard/playlist/${playlist.id}`)}
                  className="text-white cursor-pointer"
                >
                  {playlist.name}
                </p>

                <PlaylistMenu
                  playlist={playlist}
                  onRename={() => {
                    setEditingId(playlist.id);
                    setNewName(playlist.name);
                  }}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
