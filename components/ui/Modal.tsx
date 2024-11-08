import React from "react";

export default function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="relative p-8 w-full max-w-lg rounded-lg shadow-xl bg-white/30 backdrop-blur-md border border-white/20"
        style={{ backgroundImage: "url('/path/to/email.jpg')" }}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-300 rounded-full p-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
