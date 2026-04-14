import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Dashboard", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Team", href: "#" },
    { name: "Reports", href: "#" },
    { name: "Settings", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 z-40 h-full w-64 bg-slate-900 text-white p-5 transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:w-64`}
      >
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-xl font-bold">My App</h1>

          <button
            className="rounded-md bg-slate-800 px-3 py-2 text-white md:hidden"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </aside>

      <div className="md:pl-64">
        <header className="flex items-center justify-between bg-white px-4 py-4 shadow-sm md:px-6">
          <button
            className="rounded-md bg-slate-900 px-3 py-2 text-white md:hidden"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          <h2 className="text-lg font-semibold text-slate-800">Navbar</h2>
          <div />
        </header>

        <main className="p-4 md:p-6">
          <div className="rounded-xl bg-white p-6 shadow">
            Your page content goes here.
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;
