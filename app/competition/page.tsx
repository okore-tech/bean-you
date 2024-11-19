"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/MobileNavBar";
import Footer from "../footer/page";

const CompetitionPage = () => {
    // Memoize carousels to avoid re-creating the array on every render
    const carousels = useMemo(() => [
        {
            title: "Instagram",
            description: "Explore unique styles, history, and culture.",
            media: [
                { type: "image", src: ["/malika 3.jpg", "/malika 2.jpg"], caption: "@hairlove #TexturedBeauty" },
                { type: "image", src: ["/hair2.png.jpg", "/hair5.jpeg"], caption: "@hairlove #TexturedBeauty" },
                { type: "image", src: ["/person1.png.jpg", "/download (1).jpeg"], caption: "@authentic_beauty #NaturalVibes" },
            ],
        },
        {
            title: "TikTok Posts",
            description: "Unbothered #BeanWoke",
            media: [
                { type: "video", src: ["/wendy.mp4"], caption: "Makeup and Fashion✌️ #BeanWoke" },
                { type: "video", src: ["/stacy.mp4"], caption: "Vibes 💅 #GlowUp" },
                { type: "video", src: ["/fashion.mp4"], caption: "#DayInLife" },
            ],
        },
        {
            title: "Career Day",
            description: "A Day in the Life of a Vet Graduate",
            media: [
                { type: "video", src: ["/vet.mp4"], caption: "Vet Life 🐾 #DayInLife" },
            ],
        },
    ], []);

    const [activeCarousel, setActiveCarousel] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mediaIndex, setMediaIndex] = useState(
        carousels.map(() => Array(3).fill(0))
    );

    // Auto switch between images/videos in the displayed containers
    useEffect(() => {
        const interval = setInterval(() => {
            setMediaIndex((prevMediaIndex) =>
                prevMediaIndex.map((indexes, carouselIdx) =>
                    carouselIdx === activeCarousel
                        ? indexes.map((index, i) =>
                              (index + 1) % carousels[carouselIdx].media[currentIndex + i]?.src.length
                          )
                        : indexes
                )
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [activeCarousel, carousels, currentIndex]);

    // Auto switch to the next set of 3 media
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 3) % carousels[activeCarousel].media.length
            );
        }, 9000);

        return () => clearInterval(interval);
    }, [activeCarousel, carousels]);

    return (
        <div className="bg-gradient-to-b from-[#0f100f] to-[#6C360C] text-white min-h-screen">
            <Navbar />

            {/* "Be The Face" Section */}
            <section className="text-center p-8">
                <div className="flex flex-col items-center">
                    <h2
                        className="text-5xl md:text-6xl font-bold my-7"
                        style={{ fontFamily: "Poppins" }}
                    >
                        Be The Face Of Bean-You
                    </h2>
                    <p
                        className="text-lg md:text-xl mt-6 mb-12 w-[80%] md:w-[60%]"
                        style={{ fontFamily: "Poppins" }}
                    >
                        Immerse yourself in captivating conversations,
                        thought-provoking interviews, and inspiring narratives.
                        Discover, engage, and be inspired! Join our competition
                        to become the next Face of BeanYou.com across all
                        platforms.
                    </p>
                </div>

                {/* Fixed Images */}
                <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
                    <div className="p-2 border-4 border-purple-400 rounded-full shadow-lg">
                        <Image
                            src="/malika 3.jpg"
                            alt="Malika 3"
                            width={150}
                            height={150}
                            className="object-cover rounded-full"
                        />
                    </div>
                    <div className="p-2 border-4 border-blue-400 rounded-full shadow-lg">
                        <Image
                            src="/download (1).jpeg"
                            alt="Download 1"
                            width={150}
                            height={150}
                            className="object-cover rounded-full"
                        />
                    </div>
                    <div className="p-2 border-4 border-red-400 rounded-full shadow-lg">
                        <Image
                            src="/hair2.png.jpg"
                            alt="Hair 2"
                            width={150}
                            height={150}
                            className="object-cover rounded-full"
                        />
                    </div>
                    <div className="p-2 border-4 border-green-400 rounded-full shadow-lg">
                        <Image
                            src="/Face reveal.jpeg"
                            alt="Face Reveal"
                            width={150}
                            height={150}
                            className="object-cover rounded-full"
                        />
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

            {/* Carousel Section */}
            <section className="p-4">
                <h2 className="text-4xl text-center font-bold text-[#FF7F50] mb-8">Featured Entries</h2>

                <div className="flex justify-center gap-4 mb-6">
                    {carousels.map((carousel, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveCarousel(index);
                                setCurrentIndex(0);
                            }}
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                activeCarousel === index
                                    ? "bg-[#FF7F50] text-black"
                                    : "bg-gray-700 text-white hover:bg-[#FF7F50] hover:text-black"
                            }`}
                        >
                            {carousel.title}
                        </button>
                    ))}
                </div>

                <div className="relative w-full max-w-5xl mx-auto grid grid-cols-3 gap-6">
                    {carousels[activeCarousel].media.slice(currentIndex, currentIndex + 3).map((item, idx) => (
                        <div
                            key={idx}
                            className="w-full h-[300px] overflow-hidden rounded-xl shadow-2xl bg-black flex items-center justify-center transform transition-all duration-500 hover:scale-105"
                        >
                            {item.type === "image" ? (
                                <Image
                                    src={item.src[mediaIndex[activeCarousel][idx]]}
                                    alt={item.caption}
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <video
                                    src={item.src[mediaIndex[activeCarousel][idx]]}
                                    autoPlay
                                    muted
                                    loop
                                    className="w-full h-full object-cover"
                                    onClick={(e) => (e.target as HTMLVideoElement).requestFullscreen()}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <p className="italic text-lg font-bold text-[#FF7F50] shadow-md bg-black px-4 py-2 rounded-full inline-block">
                        {carousels[activeCarousel].media[currentIndex]?.caption}
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CompetitionPage;
