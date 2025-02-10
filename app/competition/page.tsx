"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/MobileNavBar";
import Footer from "../footer/page";
import { motion, AnimatePresence } from "framer-motion";

const CompetitionPage = () => {
    const carousels = useMemo(() => [
        {
            title: "Applicants",
            description: "See the creative expressions from applicants.",
            media: [
                { type: "image", src: "/euginia.jpg", caption: "@hairlove #TexturedBeauty" },
                { type: "image", src: "/euginia2.jpg", caption: "@hairlove #TexturedBeauty" },
                { type: "image", src: "/person1.png.jpg", caption: "@authentic_beauty #NaturalVibes" },
            ],
        },
        {
            title: "Creativity in Motion",
            description: "See video applications showcasing talent.",
            media: [
                { type: "video", src: "/diani video (10).mp4", caption: "Vibes 💅 #GlowUp" },
                { type: "video", src: "/copy_BFDF2A01-B46B-4A37-87A7-7ADB2CE40B1D - Vivian Kabiru.mov", caption: "Makeup and Fashion✌️ #BeanWoke" },
            ],
        },
        {
            title: "Career Day",
            description: "A Day in the Life of a Vet Graduate",
            media: [
                { type: "video", src: "/vet.mp4", caption: "Vet Life 🐾 #DayInLife" },
            ],
        },
    ], []);

    const [activeCarousel, setActiveCarousel] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carousels[activeCarousel].media.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeCarousel, carousels]);

    return (
        <div className="bg-gradient-to-b from-[#0f100f] to-[#6C360C] text-white min-h-screen">
            <Navbar />

            {/* "Be The Face" Section */}
            <section className="text-center p-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-6xl font-bold my-7"
                >
                    Be The Face Of Bean-You
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-lg md:text-xl mt-6 mb-12 w-[80%] md:w-[60%] mx-auto"
                >
                    Immerse yourself in captivating conversations, thought-provoking interviews, and inspiring narratives.
                    Join our competition to become the next Face of BeanYou.com across all platforms.
                </motion.p>

                {/* Apply Button */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex justify-center mb-6"
                >
                    <Link
                        href="/#connect-and-chat"
                        className="bg-gradient-to-r from-[#FF5733] to-[#FF7F50] text-black font-bold py-3 px-8 rounded-full text-lg shadow-md transform transition-all duration-300 hover:scale-105"
                    >
                        Apply Here
                    </Link>
                </motion.div>
            </section>

            {/* Fixed Images Section */}
            <section className="flex flex-wrap justify-center items-center gap-6 px-6 md:px-12 mb-10">
                {["/malika 3.jpg", "/download (1).jpeg", "/hair2.png.jpg", "/Face reveal.jpeg"].map((src, index) => (
                    <div key={index} className="p-2 border-4 border-[#F98824] rounded-full shadow-lg transition-transform hover:scale-110">
                        <Image
                            src={src}
                            alt="Applicant"
                            width={120}
                            height={120}
                            className="object-cover rounded-full"
                        />
                    </div>
                ))}
            </section>

            {/* Carousel Section */}
            <section className="p-4">
                <h2 className="text-4xl text-center font-bold text-[#FF7F50] mb-8">Featured Entries</h2>

                {/* Buttons with New Styling */}
                <div className="flex justify-center gap-4 mb-6">
                    {carousels.map((carousel, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setActiveCarousel(index);
                                setCurrentIndex(0);
                            }}
                            className={`px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ${
                                activeCarousel === index
                                    ? "bg-[#FF7F50] text-black"
                                    : "bg-gray-700 text-white hover:bg-[#FF7F50] hover:text-black"
                            }`}
                        >
                            {carousel.title}
                        </motion.button>
                    ))}
                </div>

                {/* Slideshow Container */}
                <div className="relative w-full max-w-4xl mx-auto flex justify-center">
                    <motion.div
                        className="relative w-full h-[350px] bg-black rounded-3xl flex items-center justify-center shadow-lg overflow-hidden border-4 border-[#F98824]"
                        animate={{ boxShadow: ["0px 0px 10px rgba(248, 106, 74, 0.5)", "0px 0px 20px rgba(248, 106, 74, 0.8)"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                        <AnimatePresence mode="wait">
                            {carousels[activeCarousel].media[currentIndex].type === "image" ? (
                                <motion.div
                                    key={carousels[activeCarousel].media[currentIndex].src}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute w-full h-full flex justify-center items-center"
                                >
                                    <Image
                                        src={carousels[activeCarousel].media[currentIndex].src}
                                        alt="Featured Entry"
                                        width={350}
                                        height={350}
                                        className="rounded-2xl shadow-lg object-cover"
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="video-slide"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute w-full h-full flex justify-center items-center"
                                >
                                    <video
                                        src={carousels[activeCarousel].media[currentIndex].src}
                                        autoPlay
                                        muted
                                        loop
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CompetitionPage;
