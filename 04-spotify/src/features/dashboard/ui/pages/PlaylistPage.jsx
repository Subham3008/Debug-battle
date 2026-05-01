import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const PlaylistList = () => {
  // const { playlists } = useSelector((store) => store.playlist);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/dashboard/playlist`)}
      className="flex flex-col gap-2"
    >
      {/* {playlists.map((playlist) => (
        <div
          key={playlist.id}
          onClick={() => navigate(`/dashboard/playlist/${playlist.id}`)} // 👈 yahi
          className="p-2 bg-[#1e1e1e] rounded hover:bg-[#2a2a2a] cursor-pointer"
        >
          {playlist.name}
        </div>
      ))} */}
      Playlist
    </div>
  );
};

export default PlaylistList;
