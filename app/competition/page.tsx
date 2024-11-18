"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/MobileNavBar";
import Footer from "../footer/page";

const CompetitionPage = () => {
    const carousels = [
        {
            title: "Instagram",
            description: "Explore unique styles, history, and culture.",
            media: [
                { type: "image", src: "/malika 3.jpg", caption: "@style_inspo #Malika" },
                { type: "image", src: "/hair2.png.jpg", caption: "@hairlove #TexturedBeauty" },
                { type: "image", src: "/person1.png.jpg", caption: "@authentic_beauty #NaturalVibes" },
                { type: "image", src: "/hair5.jpeg", caption: "@fashionista #Trendsetter" },
                { type: "image", src: "/hair3.jpeg", caption: "@curly_girl #CurlsForDays" },
            ],
        },
        {
            title: "TikTok Posts",
            description: "Unbothered #beanwoke",
            media: [
                { type: "image", src: "/malika 2.jpg", caption: "Unbothered ✌️ #BeanWoke" },
                { type: "image", src: "/unbothered malika.jpeg", caption: "Malika vibes 💅 #GlowUp" },
            ],
        },
        {
            title: "TikTok Shorts",
            description: "A Day in the Life of a Vet Graduate",
            media: [
                { type: "video", src: "/vet.mp4", caption: "Vet Life 🐾 #DayInLife" },
                { type: "video", src: "/vet.mp4", caption: "Animal Lover ❤️ #VetJourney" },
            ],
        },
    ];

    const [activeCarousel, setActiveCarousel] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % carousels[activeCarousel].media.length
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + carousels[activeCarousel].media.length) %
            carousels[activeCarousel].media.length
        );
    };
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
                <div className="flex flex-wrap justify-center items-center space-x-4 mb-6">
                    <div className="p-2 border-4 border-purple-300 rounded-lg">
                        <Image
                            src="/malika 3.jpg"
                            alt="Malika 3"
                            width={150}
                            height={150}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="p-2 border-4 border-blue-300 rounded-lg">
                        <Image
                            src="/download (1).jpeg"
                            alt="Download 1"
                            width={150}
                            height={150}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="p-2 border-4 border-red-300 rounded-lg">
                        <Image
                            src="/hair2.png.jpg"
                            alt="Hair 2"
                            width={150}
                            height={150}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="p-2 border-4 border-green-300 rounded-lg">
                        <Image
                            src="/face reveal.jpeg"
                            alt="Face Reveal"
                            width={150}
                            height={150}
                            className="object-cover rounded-lg"
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

            {/* Carousel Switcher */}
            <section className="p-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-[#FF7F50] mb-4">Featured Entries</h2>
                    <div className="flex justify-center space-x-4 mb-6">
                        {carousels.map((carousel, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setActiveCarousel(index);
                                    setCurrentIndex(0);
                                }}
                                className={`px-4 py-2 rounded-full transition ${
                                    activeCarousel === index
                                        ? "bg-[#FF7F50] text-black"
                                        : "bg-gray-700 text-white"
                                }`}
                            >
                                {carousel.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative w-full max-w-lg mx-auto">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        {carousels[activeCarousel].media[currentIndex].type === "image" ? (
                            <Image
                                src={carousels[activeCarousel].media[currentIndex].src}
                                alt="Carousel Media"
                                width={600}
                                height={400}
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        ) : (
                            <video
                                src={carousels[activeCarousel].media[currentIndex].src}
                                controls
                                className="w-full h-auto"
                            />
                        )}
                    </div>

                    <div className="text-center mt-4">
                        <p className="italic text-gray-300">
                            {carousels[activeCarousel].media[currentIndex].caption}
                        </p>
                    </div>

                    <div className="flex justify-between mt-6">
                        <button
                            onClick={handlePrevious}
                            className="px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-[#FF7F50]"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-[#FF7F50]"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CompetitionPage;