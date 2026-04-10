import React from "react";

const Navbar = () => {
  return (
    <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
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
      </a>

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
        <button className="inline-flex items-center gap-2 rounded-md h-9 px-4 py-2 hover:bg-accent">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            S
          </div>
          <span className="hidden sm:inline">Subham</span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
