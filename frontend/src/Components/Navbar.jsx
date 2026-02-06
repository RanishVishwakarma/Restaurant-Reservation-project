import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="w-full text-white px-4 sm:px-8 py-6 flex items-center justify-between relative z-50">
      {/* Logo */}
      <h2
        onClick={() => scrollTo("home")}
        className="font-bold text-xl sm:text-2xl tracking-wide cursor-pointer"
      >
        EMERALD BISTRO
      </h2>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-sm lg:text-lg font-semibold">
        <li onClick={() => scrollTo("home")} className="cursor-pointer hover:text-amber-400 transition">
          HOME
        </li>
        <li onClick={() => scrollTo("menu")} className="cursor-pointer hover:text-amber-400 transition">
          MENU
        </li>
        <li onClick={() => scrollTo("reservation")} className="cursor-pointer hover:text-amber-400 transition">
          RESERVATION
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setOpen(!open)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-8 text-lg font-semibold">
            <li onClick={() => scrollTo("home")} className="cursor-pointer hover:text-amber-400">
              HOME
            </li>
            <li onClick={() => scrollTo("menu")} className="cursor-pointer hover:text-amber-400">
              MENU
            </li>
            <li onClick={() => scrollTo("reservation")} className="cursor-pointer hover:text-amber-400">
              RESERVATION
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
