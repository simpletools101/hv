"use client";

import { useState } from "react";

export default function HeaderItem() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white w-full px-5 py-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-semibold">
          HaveyHomes
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a className="hover:text-gray-600">Details</a>
          <a className="hover:text-gray-600">Virtual Tour</a>
          <a className="hover:text-gray-600">Photos</a>
          <a className="hover:text-gray-600">Video</a>
          <a className="hover:text-gray-600">Floor Plan</a>
          <a className="hover:text-gray-600">Map</a>
        </nav>

        {/* Desktop Contact */}
        <a className="hidden md:block font-bold text-2xl">
          Contact
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden border-t pt-4">

          <a>Details</a>
          <a>Virtual Tour</a>
          <a>Photos</a>
          <a>Video</a>
          <a>Floor Plan</a>
          <a>Map</a>

          <a className="font-bold text-xl pt-2">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
