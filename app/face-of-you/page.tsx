"use client";

import Image from 'next/image';
import { Mochiy_Pop_One } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

// Load the Mochiy Pop font
const mochiyPopOne = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mochiy-pop-one",
});

export default function Page() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = () => {
    router.push("/CompetitionPage");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9eadb] py-10 px-6 relative overflow-hidden">
      {/* Background Textures */}
      <div className="absolute top-10 left-5 w-52 h-52 bg-[#f0c087] rounded-full opacity-30 blur-xl" />
      <div className="absolute bottom-10 right-5 w-60 h-60 bg-[#c06e45] rounded-full opacity-30 blur-2xl" />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:space-x-12 w-full max-w-6xl relative z-10">
        
        {/* Artistic Text Container */}
        <div className="bg-[#FFE5B4] p-8 rounded-3xl shadow-xl transform md:-translate-y-8 hover:-rotate-1 transition-all duration-300 ease-in-out w-full md:w-1/2">
          <h1 className={`${mochiyPopOne.className} text-5xl font-bold mb-4 text-[#5A3E31]`}>
            FACE OF BEAN-YOU
          </h1>
          <p className="text-lg leading-7 text-[#4E2C19] mb-6 font-medium">
            Yo, fam! Let's dive into this wild adventure and vibe with all the creative souls out there! Flex your authenticity and soak up the dope art and trends. Let’s get lit discovering new stuff together!
          </p>
          <p className="text-md text-[#A85D3B] font-bold mb-4">SEE OTHER GEN-Z ENTRIES?</p>
          <button
            onClick={handleButtonClick}
            className="bg-[#CC7B4F] text-white py-2 px-6 rounded-full shadow-lg hover:bg-[#A85D3B] transition duration-200"
          >
            Click Here!
          </button>
        </div>
        
        {/* Image and Button Container */}
        <div className="mt-8 md:mt-0 md:relative md:top-8 w-full md:w-1/2 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
          <Image
            src="/gen-z.jpeg"
            alt="Gen Z"
            width={300}
            height={300}
            className="object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
