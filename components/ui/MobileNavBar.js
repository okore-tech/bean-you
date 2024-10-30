"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full p-4 z-50 flex items-center justify-between bg-transparent shadow-md transition duration-300">
      <Link href="/">
        <Image
          src="/logo-removebg-preview.png"
          alt="Bean You Logo"
          width={120}
          height={60}
          className="object-contain"
        />
      </Link>
      <button onClick={toggleMenu} className="lg:hidden text-gray-800">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {/* Side Menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="flex flex-col items-start space-y-6 mt-16 p-6">
          <Link
            href="/"
            className="text-[#F86A4A] font-semibold text-lg hover:text-[#FF5722] transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/competition"
            className="text-[#F86A4A] font-semibold text-lg hover:text-[#FF5722] transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Competition
          </Link>
          <Link
            href="/social-media"
            className="text-[#F86A4A] font-semibold text-lg hover:text-[#FF5722] transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Social Media
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
