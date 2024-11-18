import React, { ReactNode } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ show, onClose, children }: ModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="relative w-full max-w-md p-8 bg-white rounded-xl shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition duration-150"
          aria-label="Close modal"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
