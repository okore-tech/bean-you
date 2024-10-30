"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full p-4 z-50 flex justify-center bg-transparent shadow-md transition duration-300">
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
      <nav className="flex flex-grow justify-between items-center max-w-3xl mx-auto">
        <div className="flex-grow flex justify-end">
          <Link href="/" className="text-gray-800 font-semibold hover:text-[#F86A4A] transition duration-300">Home</Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/competition" className="text-gray-800 font-semibold hover:text-[#F86A4A] transition duration-300">Competition</Link>
          <Link href="/social-media" className="text-gray-800 font-semibold hover:text-[#F86A4A] transition duration-300">Social Media</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
