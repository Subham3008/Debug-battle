import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Eye, EyeOff, SquarePen, Trash } from "lucide-react";
import { MyContext } from "@/context/BlogContext";

const Articals = ({ postData }) => {
  const { handleDelete, togglepublish } = MyContext();
  console.log(postData);

  return (
    <div className="flex items-center justify-between rounded-xl border p-4 transition hover:shadow-md border-black/20 p-6 shadow-sm">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-medium">{postData.title}</h3>

          {postData.published ? (
            <span className=" rounded-md bg-primary px-2 py-0.5 text-xs text-white">
              Published
            </span>
          ) : (
            <span className="rounded-md bg-gray-200 px-2 py-0.5 text-xs text-black/80 font-bold">
              Draft
            </span>
          )}
        </div>

        <p className="mt-1 truncate text-sm text-muted-foreground">
          {postData.excerpt}
        </p>

        <p className="mt-2 text-xs text-muted-foreground">
          Last updated: <span>{postData.date}</span>
        </p>
      </div>

      {/* Action Button */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="ml-4 rounded-md p-2 hover:bg-gray-100 cursor-pointer">
            <Ellipsis />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuSeparator />
          <DropdownMenuItem className="border-b">
            <Eye />
            <span className="text-black/70">View</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="border-b">
            {" "}
            <SquarePen />
            <span className="text-black/70 ">Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => togglepublish(postData.id)}
            className="border-b"
          >
            {postData.published ? (
              <div className="text-black/70 flex items-center gap-2 ">
                <EyeOff /> <span>Unpublish</span>
              </div>
            ) : (
              <div className="text-black/70 flex items-center gap-2">
                <Eye /> <span>Publish</span>
              </div>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              handleDelete(postData.id);
            }}
            className="border-b text-black/70 flex items-center gap-2 hover:bg-amber-400 w-full transition-all duration-300 rounded-sm"
          >
            {" "}
            <Trash />
            <span className="text-red-500">Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Articals;
