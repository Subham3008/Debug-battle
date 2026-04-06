import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { useMyContext } from "../context/AppContext";

const Navbar = () => {
  const { loggedUser, setLoggedUser } = useMyContext();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6 sticky top-0 z-20 ${
        scrolled
          ? "border-b border-white/60 bg-[#0d0d0d]/80 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <a className="flex items-center gap-2 shrink-0 active" href="/home">
        <div className="w-8 h-8 bg-volt rounded-xl flex items-center justify-center bg-[#C8F400]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-zap text-ink fill-ink text-black"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
          </svg>
        </div>
        <span className="font-heading font-bold text-lg">
          Sky<span className="text-volt text-[#C8F400]">Mart</span>
        </span>
      </a>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-6">
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#C8F400]" : "")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#C8F400]" : "")}
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#C8F400]" : "")}
          to="/about"
        >
          About
        </NavLink>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-2 shrink-0">
        {/* User Info */}
        <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
          <div className="w-6 h-6 bg-volt rounded-lg flex items-center justify-center text-black text-xs font-bold bg-[#C8F400]">
            S
          </div>
          <span className="text-sm text-white/70 font-body max-w-25 truncate">
            {loggedUser.name}
          </span>
        </div>

        {/* Cart Button */}
        <button className="relative p-2.5 bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </button>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem("loggedUser");
            setLoggedUser(null);
          }}
          title="Logout"
          className="p-2.5 bg-white/8 hover:bg-red-500/20 hover:border-red-500/30 border border-white/10 rounded-xl transition-all text-white/60 hover:text-red-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-log-out"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <button className="md:hidden p-2.5 bg-white/8 border border-white/10 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
