"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink.jsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay.jsx";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="fixed mx-auto top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex container bg-black/40 backdrop-blur-md border border-white/10 rounded-full py-4 px-8 items-center justify-between mx-auto shadow-2xl">
          <Link
            href={"/"}
            className="text-2xl text-white font-black italic tracking-tighter"
          >
            LEO{" "}
            <span className="text-gray-400 not-italic font-normal ml-1">ツ</span>
          </Link>

          {/* Status Badge — desktop only */}
          <div className="hidden md:flex items-center gap-2 bg-black px-4 py-2 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            <span className="text-xs text-gray-300 font-medium">
              Available for Freelance
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Links */}
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full transition-all"
              aria-label="Toggle menu"
            >
              {navbarOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <MenuOverlay
        links={navLinks}
        isOpen={navbarOpen}
        onClose={() => setNavbarOpen(false)}
      />
    </>
  );
};

export default Navbar;
