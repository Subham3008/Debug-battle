import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { MyContext } from "@/context/BlogContext";

const Articals = () => {
  const { loggedUser } = MyContext();
  return (
    <div className="flex items-center justify-between rounded-xl border p-4 transition hover:shadow-md border-black/20 p-6 shadow-sm">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-medium">Nothing</h3>

          <span className="rounded-md bg-primary px-2 py-0.5 text-xs text-white">
            Published
          </span>
        </div>

        <p className="mt-1 truncate text-sm text-muted-foreground">
          Nothing is a phone where lots of stuff
        </p>

        <p className="mt-2 text-xs text-muted-foreground">
          Last updated: Apr 10, 2026
        </p>
      </div>

      {/* Action Button */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="ml-4 rounded-md p-2 hover:bg-gray-100">
            <Ellipsis />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          {/* <DropdownMenuLabel>
            <p className="font-bold text-black/70 text-md">
              {loggedUser?.name?.split(" ")[0]}
            </p>
            <p className="text-[10px] text-muted-foreground break-all">
              {loggedUser?.email}
            </p>
            <p className="font-medium capitalize">{loggedUser?.role}</p>
          </DropdownMenuLabel> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="border-b">
            <span className="text-black/70">View</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="border-b">
            <span className="text-red-500">Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="border-b">
            <span className="text-black/70">Publish</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="border-b">
            <span className="text-black/70">Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Articals;
