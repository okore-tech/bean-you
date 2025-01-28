"use client";

import Image from 'next/image';
import { Mochiy_Pop_One } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const mochiyPopOne = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mochiy-pop-one",
});

const slides = [
  { src: '/gen-z.jpeg', alt: 'Gen Z Story 1', text: 'Malika - Bold and Vibrant!' },
  { src: '/gen-z2.jpeg', alt: 'Gen Z Story 2', text: 'Khalid - Creative at Heart' },
  { src: '/gen-z3.jpeg', alt: 'Gen Z Story 3', text: 'Sanaa - Breaking Norms' }
];

export default function Page() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    router.push("/competition");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#f9eadb] to-[#f7d7ba] py-10 px-6 relative overflow-hidden">
      {/* Background Textures */}
      <div className="absolute top-10 left-5 w-72 h-72 bg-[#f0c087] rounded-full opacity-40 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-[#c06e45] rounded-full opacity-40 blur-2xl animate-float delay-500" />

      {/* Floating Coffee Grains */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 bg-[#5A3E31] rounded-full animate-coffee-grain"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Floating Rotating Text */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-0 text-[10rem] font-bold text-[#f5e1c0] opacity-15 animate-spin-slow pointer-events-none">
        BEAN YOU
      </div>

      {/* Sparkle Animation */}
      <div className="absolute w-16 h-16 bg-white rounded-full blur-xl animate-sparkle" />
      <div className="absolute w-20 h-20 bg-[#ffbca9] rounded-full blur-xl animate-sparkle delay-700" />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:space-x-12 w-full max-w-6xl relative z-10">
        {/* Artistic Text Container */}
        <div className="bg-gradient-to-r from-[#FFD59E] to-[#FFB77A] p-10 rounded-3xl shadow-2xl transform md:-translate-y-8 hover:-rotate-1 hover:scale-105 transition-all duration-500 ease-in-out w-full md:w-1/2">
          <h1 className={`${mochiyPopOne.className} text-6xl font-extrabold mb-6 text-[#5A3E31] tracking-wide drop-shadow-md`}>FACE OF BEAN-YOU</h1>
          <p className="text-xl leading-8 text-[#4E2C19] mb-8 font-medium drop-shadow-sm">
            Yo, fam! Dive headfirst into this wild ride and connect with the realest creatives! Show off your vibe, embrace your true self, and let's make some noise together!
          </p>
          <p className="text-lg text-[#A85D3B] font-bold mb-6 animate-pulse">CHECK OUT OTHER GEN-Z ENTRIES?</p>
          <button
            onClick={handleButtonClick}
            className="bg-[#CC7B4F] text-white py-3 px-8 rounded-full shadow-xl hover:bg-[#A85D3B] hover:scale-110 transition-all duration-300 ease-in-out flex items-center space-x-2"
          >
            <span className="text-lg">🚀</span>
            <span>Click Here!</span>
          </button>
        </div>

        {/* Slideshow Container */}
        <div className="mt-8 md:mt-0 md:relative md:top-8 w-full md:w-1/2 flex flex-col items-center text-center transform hover:scale-110 transition-all duration-500 ease-in-out">
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            width={340}
            height={340}
            className="object-contain rounded-3xl shadow-2xl hover:rotate-6 transition-all duration-500 ease-in-out"
          />
          <p className="mt-4 text-lg font-semibold text-[#5A3E31]">
            {slides[currentSlide].text}
          </p>
        </div>
      </div>
    </div>
  );
}
