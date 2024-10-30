"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="relative w-full bg-[#6C360C] text-white transition duration-300">
            <div className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/logo-removebg-preview.png"
                        alt="Bean You Logo"
                        width={120}
                        height={60}
                        className="object-contain"
                    />
                </Link>
                {/* Navigation Links for Large Screens */}
                <nav className="hidden lg:flex space-x-8">
                    <Link
                        href="/"
                        className="font-semibold text-lg hover:text-[#FF5722] transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/competition"
                        className="font-semibold text-lg hover:text-[#FF5722] transition duration-300"
                    >
                        Competition
                    </Link>
                    <Link
                        href="/social-media"
                        className="font-semibold text-lg hover:text-[#FF5722] transition duration-300"
                    >
                        Social Media
                    </Link>
                </nav>
                {/* Hamburger Menu Button for Small Screens */}
                <button onClick={toggleMenu} className="lg:hidden text-white">
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>
            {/* Side Menu for Small Screens */}
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
                <div className="flex flex-col items-start space-y-6 mt-16 p-6 text-gray-900">
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
