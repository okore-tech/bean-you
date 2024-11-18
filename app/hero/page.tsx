"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Poppins, Libre_Franklin } from "next/font/google";
import React, { useState, useEffect } from "react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
});

const libreFranklin = Libre_Franklin({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-libre-franklin",
});

export default function HeroPage() {
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

    const handleApplyClick = () => {
        router.push("/#connect-and-chat");
    };

    return (
        <div
            className={`h-screen bg-[#6C360C] text-white w-full flex flex-col ${poppins.className}`}
        >
            <div className="w-full relative z-10 flex flex-col h-full">
                <main className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center md:items-start justify-center gap-8 relative">
                    {/* Hero Images */}
                    <div className="absolute md:relative w-full h-full bottom-0 left-0 right-0">
                        <Image
                            src="/image-coffee.png"
                            alt="Coffee splash background"
                            fill
                            className="object-cover w-full min-w-full left-0 bottom-0 hidden sm:flex"
                            priority
                        />
                        <Image
                            src="/image-girl.png"
                            alt="Smiling person enjoying coffee"
                            fill
                            className="object-cover lg:object-contain w-full min-w-full object-bottom"
                            priority
                        />
                    </div>

                    {/* Hero Text */}
                    <div
                        className={`text-left relative flex flex-col items-end md:items-start ${poppins.className} md:h-full px-4 lg:pt-40 mt-[100px] md:mt-0`}
                    >
                        <div className="hero__text__wrapper">
                            <h1 className="text-5xl md:text-7xl lg:text-[100px] lg:leading-none font-bold mb-4">
                                <span className="itsnotjust__text text-[#F86A4A]">
                                    It's not just{" "}
                                </span>
                                <span className="coffee__text text-black">
                                    coffee,
                                </span>
                            </h1>
                            <h2 className="expression__text text-lg md:text-2xl lg:text-3xl text-[#F98824] font-semibold mb-6">
                                It’s an expression of yourself.
                            </h2>
                            <p className="hero__description text-base md:text-lg max-w-md mb-8 text-white">
                                Be the Face of Change with Bean You: Join Our
                                Gen Z Revolution and Represent Us on the Boldest
                                conversations.
                            </p>
                            <Button
                                className="bg-[#F86A4A] hover:bg-[#F86A4A] text-white font-bold py-6 px-6 rounded-full text-sm md:text-base"
                                onClick={handleApplyClick}
                            >
                                Apply Here
                            </Button>
                        </div>
                    </div>

                    {/* Coffee Splash Background */}
                    {/* <div className="hero__coffee absolute left-0 z-0 w-full h-full opacity-100">
                        <Image
                            src="/image-coffee.png"
                            alt="Coffee splash background"
                            fill
                            className="object-cover"
                            style={{ objectPosition: "left bottom" }}
                            priority
                        />
                    </div> */}
                </main>

                {/* Coffee Cup Image */}
                <div className="coffee-cup fixed bottom-4 right-20 w-40 h-40 md:w-120 md:h-120 transform transition-all duration-300 ease-in-out">
                    <Image
                        src="/coffee-cup.png"
                        alt="Bean You coffee cup"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Mobile Background Image
                {isMobile && (
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/image-girl.png')] bg-cover bg-no-repeat bg-center opacity-100" />
                )} */}
            </div>

            <style jsx>{`
                @media only screen and (max-width: 768px) {
                    .hero__coffee {
                        display: none; /* Hide the coffee splash background on mobile */
                    }
                    .coffee-cup {
                        width: 60px; /* Adjust width for mobile */
                        height: 60px; /* Maintain height ratio for mobile */
                        bottom: 10%; /* Adjust vertical position on mobile */
                        right: 10%; /* Adjust horizontal position on mobile */
                    }
                }
            `}</style>
        </div>
    );
}
