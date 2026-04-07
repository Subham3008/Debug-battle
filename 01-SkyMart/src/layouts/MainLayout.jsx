import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import { useMyContext } from "@/context/AppContext";

const MainLayout = () => {
  const { openCart, setOpenCart } = useMyContext();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <aside>
        <Aside openCart={openCart} setOpenCart={setOpenCart} />
      </aside>
      <div
        className={`sticky top-0 z-30 transition-all duration-300 bg-[#0d0d0d]/90 backdrop-blur-xl ${
          scrolled
            ? "border-b border-white/60 bg-[#0d0d0d]/80 backdrop-blur"
            : "border-b border-transparent"
        }`}
      >
        <Navbar setOpenCart={setOpenCart} />
      </div>
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
