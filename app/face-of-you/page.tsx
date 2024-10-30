"use client";

import { Mochiy_Pop_One } from 'next/font/google';

const mochiyPopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mochiy-pop-one',
});

export default function FaceOfBeanYou() {
  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${mochiyPopOne.className}`} style={{ background: 'linear-gradient(135deg, #E67E22, #F39C12)' }}>
      <div className="beanforyou__container w-full max-w-6xl flex flex-col md:flex-row items-stretch shadow-lg rounded-3xl overflow-hidden">

        {/* Text wrapper */}
        <div className="bean__text__wrapper w-full md:w-1/2 bg-[#D35400] p-8 flex flex-col justify-center items-start space-y-4 rounded-lg shadow-lg">
          <h1 className="bean__text__title text-5xl md:text-6xl font-bold text-brown leading-tight drop-shadow-md">
            Face of Bean You
          </h1>
          <p className="bean__text__description text-lg md:text-xl text-white font-medium drop-shadow">
            &ldquo;Yo, we’re on the hunt for fresh, authentic Kenyan Gen Z vibes to rep Bean You across socials and TV! If you’re creative, real, and all about standing out, this is your time to shine. Let’s show the world what being unapologetically you is all about!&rdquo;
          </p>
        </div>
      </div>

      {/* Mobile-specific styling */}
      <style jsx>{`
        .bean__text__wrapper {
          background: rgba(211, 84, 0, 0.8); /* Semi-transparent background for better contrast */
          transition: transform 0.3s ease;
        }

        .bean__text__wrapper:hover {
          transform: scale(1.02);
        }

        @media (max-width: 640px) {
          .bean__text__title {
            font-size: 2.5rem; /* Slightly smaller title */
          }

          .bean__text__description {
            font-size: 1rem; /* Adjusted description for better fit */
          }

          .bean__text__wrapper {
            padding: 2rem; /* Increased padding for mobile */
          }
        }
      `}</style>
    </div>
  );
}
