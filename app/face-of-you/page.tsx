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


// Image slides + alternating message
const slides = [
  { type: "image", src: "/joyce1.jpeg", alt: "Joyce - See the brightness in youth" },
  { type: "image", src: "/billy.png", alt: "Billy - Creative at Heart" },
  { type: "text", text: "Come be yourself, share your art, let us discover your cool!" },
];

export default function FaceOfYouPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#FAF5E4] to-[#FFE4C4] text-[#5A3E31] overflow-hidden"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl px-6 md:px-12 py-16 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className={`${mochiyPopOne.className} text-5xl md:text-7xl font-bold mb-6`}
        >
          FACE OF BEAN-YOU
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-xl md:text-2xl font-light leading-8 max-w-3xl mx-auto"
        >
          Celebrate the creative spirit of Gen Z! Share your story, connect with others, and express your most authentic self.
        </motion.p>
      </motion.section>

      {/* Slideshow Container with Glow */}
      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-full max-w-3xl flex justify-center items-center px-6 md:px-12 py-12"
      >
        <motion.div
          animate={{ boxShadow: ["0px 0px 20px rgba(248, 106, 74, 0.5)", "0px 0px 40px rgba(248, 106, 74, 0.8)"] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="relative w-full h-96 bg-[#8B4513] rounded-3xl flex items-center justify-center shadow-2xl border-4 border-[#F98824] overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {slides[currentSlide].type === "image" ? (
              <motion.div
                key={slides[currentSlide].src}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full h-full flex justify-center items-center"
              >
                <Image
                  src={slides[currentSlide].src}
                  alt={slides[currentSlide].alt}
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </motion.div>
            ) : (
              <motion.div
                key="text-slide"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full h-full flex justify-center items-center bg-[#F98824] rounded-2xl"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="text-2xl md:text-3xl font-semibold text-white text-center px-6"
                >
                  {slides[currentSlide].text}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* Seamless Navigation to Competition Page */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="w-full text-center py-12 px-6"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-3xl md:text-4xl font-semibold text-[#5A3E31]"
        >
          Ready to Join?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="mt-4 text-lg font-light max-w-2xl mx-auto text-[#654321]"
        >
          Be part of something big. Express your uniqueness and creativity.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/competition")}
          className="mt-6 bg-[#CC7B4F] text-white py-4 px-8 rounded-full text-lg shadow-lg hover:bg-[#A85D3B] transition"
        >
          See Entrants 🔥
        </motion.button>
      </motion.section>
    </motion.div>
  );
}
