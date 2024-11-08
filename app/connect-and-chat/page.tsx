"use client";

import React, { useState } from "react";
import Modal from "@/components/ui/Modal";

export default function ConnectAndChat() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6C360C] to-[#F86A4A] p-8 overflow-hidden">
      {/* Sleek Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light flare effect */}
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 left-24 w-64 h-64 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-2xl opacity-30 animate-spin-slow"></div>
      </div>

      {/* Glassmorphism Container */}
      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-10 md:p-14 text-left">
        <h1
          className="text-5xl font-extrabold mb-6"
          style={{
            color: '#000000',
            textShadow: '2px 2px 8px rgba(255, 165, 0, 0.7), 4px 4px 12px rgba(248, 106, 74, 0.5)',
          }}
        >
          Connect and Chat
        </h1>

        <p className="text-white/90 mb-6 text-lg">
          Want to get in touch with us? Fill out the form to connect and explore more.
        </p>

        <button
          onClick={openModal}
          className="bg-red-600 text-white font-bold rounded-full px-8 py-4 transition-transform transform hover:bg-red-700 hover:scale-105 shadow-lg focus:outline-none"
        >
          Open Form
        </button>

        {/* Modal with Enhanced Glassmorphism Effect */}
        <Modal show={showModal} onClose={closeModal}>
          <div className="p-8 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-[0_4px_24px_0_rgba(31,38,135,0.25)]">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Connect?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Click the button below to open the form in a new tab.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScrne492vXzPcpdsRhqDs7Ii7kDCWaPpT2MDEBUVD98wuGNjw/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full transition-colors hover:bg-orange-600"
            >
              Open Google Form
            </a>
          </div>
        </Modal>
      </div>
    </div>
  );
}
