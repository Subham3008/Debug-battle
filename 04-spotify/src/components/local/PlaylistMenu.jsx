import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { deletePlaylist } from "@/features/dashboard/state/playlistSlice";

import { MoreHorizontal, PencilIcon, TrashIcon } from "lucide-react";

import { useDispatch } from "react-redux";

const PlaylistMenu = ({ playlist, onRename }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePlaylist(playlist.id));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          onClick={(e) => e.stopPropagation()}
          className="text-gray-400 hover:text-white 
                     opacity-0 group-hover:opacity-100 transition outline-none cursor-pointer"
        >
          <MoreHorizontal size={20} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40">
        <DropdownMenuItem onClick={onRename}>
          <PencilIcon className="mr-2 h-4 w-4" />
          Rename
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleDelete} className="text-red-500">
          <TrashIcon className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PlaylistMenu;
