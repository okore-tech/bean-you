"use client";

import React, { useState } from "react";

export default function ConnectAndChat() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", comment: "" });
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contactpage__container bg-red-900 min-h-screen flex items-start justify-start p-8">
      <div className="contactpage w-full max-w-lg bg-red-800 rounded-3xl p-8">
        <h1 className="connect text-4xl text-white mb-6">Connect and Chat</h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-red-700 rounded-3xl p-6">
          <div className="mb-4">
            <label htmlFor="name" className="text-white block mb-1">NAME</label>
            <input
              type="text"
              id="name"
              className="w-full bg-transparent border-b border-white text-white focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white block mb-1">EMAIL</label>
            <input
              type="email"
              id="email"
              className="w-full bg-transparent border-b border-white text-white focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="text-white block mb-1">Any questions or comments?</label>
            <textarea
              id="comment"
              rows={3}
              className="w-full bg-red-300 rounded-xl p-2 text-black resize-none focus:outline-none"
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-600 transition-colors w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
