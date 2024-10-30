"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const CompetitionPage = () => {
  const slides = useMemo(
    () => [
      {
        title: "African Hair",
        description: "Explore unique styles, history, and culture.",
        media: [
          { type: "image", src: "/malika 3.jpg" },
          { type: "image", src: "/hair2.png.jpg" },
          { type: "image", src: "/person1.png.jpg" },
          { type: "image", src: "/hair5.jpeg" },
          { type: "image", src: "/hair3.jpeg" },
        ],
      },
      {
        title: "TikTok Post",
        description: "Unbothered #beanwoke",
        media: [
          { type: "image", src: "/malika 2.jpg" },
          { type: "image", src: "/unbothered malika.jpeg" },
        ],
      },
      {
        title: "A Day in the Life of a Vet Graduate",
        description: "Catch the vibe with #BeanYou on X",
        media: [{ type: "video", src: "/vet.mp4" }],
      },
    ],
    []
  );

  const [currentMediaIndex, setCurrentMediaIndex] = useState([0, 0, 0]);

  const updateSlides = useCallback(() => {
    setCurrentMediaIndex((prevIndices) =>
      prevIndices.map((index, i) => (index + 1) % slides[i].media.length)
    );
  }, [slides]);

  useEffect(() => {
    const interval = setInterval(updateSlides, 3000);
    return () => clearInterval(interval);
  }, [updateSlides]);

  return (
    <div className="bg-gradient-to-b from-[#0f100f] to-[#6C360C] text-white min-h-screen">
      

      {/* "Be The Face" Section */}
      <section className="text-center p-8">
        <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins' }}>
          Be The Face Of Bean-You
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Immerse yourself in captivating conversations, thought-provoking interviews, and inspiring narratives.
          Discover, engage, and be inspired! Join our competition to become the next Face of BeanYou.com across all platforms.
        </p>

        {/* Fixed Images */}
        <div className="flex flex-wrap justify-center items-center space-x-4 mb-6">
          <div className="p-2 border-4 border-purple-300 rounded-lg">
            <Image src="/malika 3.jpg" alt="Malika 3" width={150} height={150} className="object-cover rounded-lg" />
          </div>
          <div className="p-2 border-4 border-blue-300 rounded-lg">
            <Image src="/download (1).jpeg" alt="Download 1" width={150} height={150} className="object-cover rounded-lg" />
          </div>
          <div className="p-2 border-4 border-red-300 rounded-lg">
            <Image src="/hair2.png.jpg" alt="Hair 2" width={150} height={150} className="object-cover rounded-lg" />
          </div>
          <div className="p-2 border-4 border-green-300 rounded-lg">
            <Image src="/face reveal.jpeg" alt="Face Reveal" width={150} height={150} className="object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Apply Button */}
      <section>
        <div className="flex justify-center mb-6">
          <Link
            href="/#connect-and-chat"
            className="apply__button bg-gradient-to-r from-[#FF5733] to-[#FF7F50] text-black font-bold py-3 px-8 rounded-full text-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#FF8A65] hover:to-[#FFA726]"
          >
            Apply Here
          </Link>
        </div>
      </section>

      {/* Featured Entries */}
      <section className="p-4 md:p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF7F50] relative flex justify-center items-center space-x-2">
            <span>Featured Entries</span>
            <span className="ml-2">❤️</span>
          </h2>
          {/* Category Tabs */}
          <div className="flex justify-center mt-4 space-x-4 text-md md:text-lg">
            <button className="px-4 py-2 bg-[#FFC1A1] text-black rounded-full font-semibold">All</button>
            <button className="text-[#FFC1A1]">Hair</button>
            <button className="text-[#FFC1A1]">Style</button>
            <button className="text-[#FFC1A1]">Trends</button>
            <button className="text-[#FFC1A1]">Sport</button>
            <button className="text-[#FFC1A1]">Travel</button>
            <button className="text-[#FFC1A1]">Art</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {slides.map((slide, index) => (
            <div key={index} className="bg-[#562d0b] p-4 rounded-lg shadow-lg">
              <div className="text-center">
                {slide.media[currentMediaIndex[index]].type === "image" ? (
                  <Image
                    src={slide.media[currentMediaIndex[index]].src}
                    alt={slide.title}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                ) : (
                  <video
                    src={slide.media[currentMediaIndex[index]].src}
                    controls
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
              <h3 className="text-xl font-bold mt-4">{slide.title}</h3>
              <p className="text-sm mt-2">{slide.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CompetitionPage;
