"use client";

import React, { useState } from "react";
import Modal from "@/components/ui/Modal";

export default function ConnectAndChat() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-yellow-500 py-8 px-3 md:px-8">
      <div className="w-full max-w-lg bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12 text-center">
        <h1 className="text-4xl text-gray-800 font-bold mb-6">
          Connect and Chat
        </h1>

        <p className="text-gray-600 mb-4">
          Want to get in touch with us? Fill out the form to connect.
        </p>

        <button
          onClick={openModal}
          className="bg-red-600 text-white font-bold rounded-full px-8 py-4 transition-all transform hover:bg-red-700 hover:scale-105 shadow-xl focus:outline-none"
        >
          Open Form
        </button>

        {/* Modal with the link to Google Form */}
        <Modal show={showModal} onClose={closeModal}>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to Connect?
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Click the button below to open the form in a new tab.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScrne492vXzPcpdsRhqDs7Ii7kDCWaPpT2MDEBUVD98wuGNjw/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors hover:bg-blue-700 mb-4"
            >
              Open Google Form
            </a>
            <button
              onClick={closeModal}
              className="bg-gray-500 text-white font-semibold py-3 px-8 rounded-full transition-colors hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
