import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutDashboard, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import { MyContext } from "@/context/BlogContext";

const Navbar = () => {
  const { loggedUser, setLoggedUser } = MyContext();
  const navigate = useNavigate();
  return (
    <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 21h8" />
          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
        </svg>
        <span className="text-xl font-semibold tracking-tight">Inkwell</span>
      </div>

      {/* Right Side */}
      <nav className="flex items-center gap-2">
        {/* Dark Mode Button */}
        <button className="inline-flex items-center justify-center rounded-md size-9 hover:bg-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
          </svg>
        </button>

        {/* Profile Button */}
        {loggedUser ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center gap-2 rounded-md h-9 px-4 py-2 hover:bg-[#1bb5b5] transition-all duration-300 cursor-pointer">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {loggedUser?.name?.charAt(0)}
                </div>
                <span className="hidden sm:inline">
                  {loggedUser?.name?.split(" ")[0]}
                </span>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>
                <p className="font-bold text-black/70 text-md">
                  {loggedUser?.name?.split(" ")[0]}
                </p>
                <p className="text-[10px] text-muted-foreground break-all">
                  {loggedUser?.email}
                </p>
                <p className="font-medium capitalize">{loggedUser?.role}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {loggedUser?.role === "author" && (
                <DropdownMenuItem
                  onClick={() => navigate("/dashboard")}
                  className="border-b"
                >
                  <LayoutDashboard />
                  <span className="text-black/70">Dashboard</span>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                onClick={() => {
                  setLoggedUser(null);
                  localStorage.removeItem("blog_current_user");
                }}
              >
                <LogOut />
                <span className="text-red-500">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/login")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 cursor-pointer"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
