import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdAddCircleOutline, IoIosLogOut, IoMdMenu } from "react-icons/io";
import { MdFormatListBulletedAdd } from "react-icons/md";

const TopNavbar = ({ setToken }) => {
  const [open, setOpen] = useState(false);

  const logoutHandler = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md transition text-sm tracking-wide
     ${
       isActive
         ? "bg-amber-700 text-white"
         : "text-amber-200 hover:bg-amber-800/40"
     }`;

  return (
    <header className="w-full bg-black border-b border-amber-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <h1 className="text-xl sm:text-2xl font-serif text-amber-400 tracking-wider">
          EMERALD BISTRO
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/add" className={linkClass}>
            <IoMdAddCircleOutline />
            Add Menu
          </NavLink>
          <NavLink to="/list" className={linkClass}>
            <MdFormatListBulletedAdd />
            View Menu
          </NavLink>
          <NavLink to="/table" className={linkClass}>
            <MdFormatListBulletedAdd />
            Reservations
          </NavLink>

          <button
            onClick={logoutHandler}
            className="ml-2 px-4 py-2 rounded-md text-white bg-amber-700 hover:bg-amber-800  transition"
          >
            <IoIosLogOut className="inline mr-1" />
            Logout
          </button>
        </nav>

        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-amber-300 text-2xl"
        >
          <IoMdMenu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black/90">
          <NavLink to="/add" onClick={() => setOpen(false)} className={linkClass}>
            Add Menu
          </NavLink>
          <NavLink to="/list" onClick={() => setOpen(false)} className={linkClass}>
            View Menu
          </NavLink>
          <NavLink to="/table" onClick={() => setOpen(false)} className={linkClass}>
            Reservations
          </NavLink>
          <button
            onClick={logoutHandler}
            className="w-full text-left px-4 py-2 rounded-md text-white bg-amber-700 hover:bg-amber-800 transition"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default TopNavbar;
