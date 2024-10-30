"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from "next/font/google";
import { Mochiy_Pop_One } from "next/font/google";

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
  { name: 'X', src: '/xicon.png', link: 'https://x.com/Bean__You' },
  { name: 'Facebook', src: '/imageF.png', link: 'https://www.facebook.com/profile.php?id=61563809891807' },
  { name: 'TikTok', src: '/imageTK.png', link: 'https://www.tiktok.com/@bean__you' },
  { name: 'Instagram', src: '/instagram-icon.png', link: 'https://www.instagram.com/bean__you/' },
  { name: 'Reddit', src: '/imageR.png', link: 'https://www.reddit.com/user/Bean__You/' },
];

const messagingLinks = [
  { name: 'WhatsApp', src: '/whatsapp-icon.png', link: 'https://whatsapp.com/channel/0029Vanh5ybFHWq6S79YRb1q/' },
  { name: 'WeChat', src: '/wechat-qr.png', link: '/wechat-qr.jpg' }, // Link to QR code
  { name: 'Telegram', src: '/ticon.png', link: 'https://t.me/+YIxx1c2wXzQxOGZk' },
  { name: 'Snapchat', src: '/snapchat-icon.png', link: 'https://www.snapchat.com/add/beanyouofficial?share_id=BLTpB3OHA1c&locale=en-GB' },
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
    <main className="container mx-auto flex flex-col items-center justify-center my-10 bg-[#895737]"> {/* Set the background color here */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#F86A4A]">Enjoy Your Coffee!</h1>
      <p className="text-lg md:text-xl text-center mb-8">
        Follow us on our social media platforms to stay updated.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {socialMediaLinks.map((social) => (
          <div key={social.name} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <Link href={social.link} target="_blank">
              <Image src={social.src} alt={social.name} width={100} height={100} className="object-contain" />
            </Link>
            <p className="mt-2 text-black font-semibold">{social.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-5xl md:text-6xl font-bold mb-4 mt-10 text-[#4A2C1D]">Messaging Options</h2> {/* Updated color and size */}
      <p className="text-lg md:text-xl text-center mb-8">
        Chat with us on these platforms!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {messagingLinks.map((messaging) => (
          <div key={messaging.name} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            {messaging.link ? (
              <div onClick={messaging.name === 'WeChat' ? handleWeChatClick : undefined} className="cursor-pointer">
                <Image
                  src={messaging.src}
                  alt={messaging.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            ) : (
              <Link href={messaging.link} target="_blank">
                <Image
                  src={messaging.src}
                  alt={messaging.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </Link>
            )}
            <p className="mt-2 text-black font-semibold">{messaging.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Image src="/coffee-cup.png" alt="Cup" width={200} height={200} className="object-contain" />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Image src="/wechat-qr.jpg" alt="WeChat QR Code" width={300} height={300} className="object-contain" />
            <button className="mt-4 bg-[#F86A4A] text-white px-4 py-2 rounded" onClick={closeModal}>Close</button>
            <Link href="/wechat-qr.jpg" download className="mt-2 text-blue-500 underline">
              Download QR Code
            </Link>
          </div>
        </div>
      )}

      <footer className="bg-[#4A2C1D] text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Bean You. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
