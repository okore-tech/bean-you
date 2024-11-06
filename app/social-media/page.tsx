"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Mochiy_Pop_One } from "next/font/google";
import Navbar from "@/components/ui/MobileNavBar";  // Ensure Navbar is included
import Footer from "../footer/page";  // Footer import remains

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
});

const mochiyPopOne = Mochiy_Pop_One({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-mochiy-pop-one",
});

const socialMediaLinks = [
    { name: "X", src: "/xicon.png", link: "https://x.com/Bean__You" },
    {
        name: "Facebook",
        src: "/imageF.png",
        link: "https://www.facebook.com/profile.php?id=61563809891807",
    },
    {
        name: "TikTok",
        src: "/imageTK.png",
        link: "https://www.tiktok.com/@bean__you",
    },
    {
        name: "Instagram",
        src: "/instagram-icon.png",
        link: "https://www.instagram.com/bean__you/",
    },
    {
        name: "Reddit",
        src: "/imageR.png",
        link: "https://www.reddit.com/user/Bean__You/",
    },
    {
        name: "LinkedIn",
        src: "/logos--linkedin-icon.png",
        link: "https://www.linkedin.com/company/beanyouofficial/",
    },
];

const messagingLinks = [
    {
        name: "WhatsApp",
        src: "/whatsapp-icon.png",
        link: "https://whatsapp.com/channel/0029Vanh5ybFHWq6S79YRb1q/",
    },
    { name: "WeChat", src: "/wechat-qr.png", link: "/wechat-qr.jpg" },
    {
        name: "Telegram",
        src: "/ticon.png",
        link: "https://t.me/+YIxx1c2wXzQxOGZk",
    },
    {
        name: "Snapchat",
        src: "/snapchat-icon.png",
        link: "https://www.snapchat.com/add/beanyouofficial?share_id=BLTpB3OHA1c&locale=en-GB",
    },
];

export default function SocialMediaPage() {
    const [showModal, setShowModal] = useState(false);

    const handleWeChatClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="social-media-container flex flex-col min-h-screen">
            {/* Add Navbar here to show at the top */}
            <Navbar />

            <main className="textured-background flex flex-col items-center justify-between flex-grow">
                {/* Content */}
                <div className="my-14 px-4 flex flex-col items-center w-[100%] md:w-[60%]">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#F86A4A]" style={{ fontFamily: "Poppins" }}>
                        Enjoy Your Coffee!
                    </h1>
                    <p className="text-lg md:text-xl text-center mb-12" style={{ fontFamily: "Poppins" }}>
                        Follow us on our social media platforms to stay updated.
                    </p>
                    <div className="grid grid-cols-2 w-full md:grid-cols-3 gap-4">
                        {socialMediaLinks.map((social) => (
                            <div
                                key={social.name}
                                className="icon-container flex flex-col items-center p-4 bg-[#FFE5B4] rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                            >
                                <Link href={social.link} target="_blank">
                                    <Image src={social.src} alt={social.name} width={100} height={100} className="object-contain" />
                                </Link>
                                <p className="mt-2 text-black font-semibold">{social.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-14 px-4 flex flex-col items-center w-[100%] md:w-[60%]">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4A2C1D]" style={{ fontFamily: "Poppins" }}>
                        Messaging Options
                    </h2>
                    <p className="text-lg md:text-xl text-center mb-12" style={{ fontFamily: "Poppins" }}>
                        Chat with us on these platforms!
                    </p>
                    <div className="grid grid-cols-2 w-full md:grid-cols-3 gap-4">
                        {messagingLinks.map((messaging) => (
                            <div
                                key={messaging.name}
                                className="icon-container flex flex-col items-center p-4 bg-[#FFE5B4] rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                            >
                                <div onClick={messaging.name === "WeChat" ? handleWeChatClick : undefined} className="cursor-pointer">
                                    <Image src={messaging.src} alt={messaging.name} width={100} height={100} className="object-contain" />
                                </div>
                                <p className="mt-2 text-black font-semibold">{messaging.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 animate-bounce">
                        <Image src="/coffee-cup.png" alt="Cup" width={200} height={200} className="object-contain" />
                    </div>
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                            <Image src="/wechat-qr.jpg" alt="WeChat QR Code" width={300} height={300} className="object-contain" />
                            <button className="mt-4 bg-[#F86A4A] text-white px-4 py-2 rounded" onClick={closeModal}>
                                Close
                            </button>
                            <Link href="/wechat-qr.jpg" download className="mt-2 text-blue-500 underline">
                                Download QR Code
                            </Link>
                        </div>
                    </div>
                )}
            </main>

            {/* Add Footer here to fill the bottom */}
            <Footer />
        </div>
    );
}
