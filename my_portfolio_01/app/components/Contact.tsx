"use client";

import React, { useRef, useState } from "react";
import { Mail, Phone, Facebook, Twitter, Github, Instagram, Link } from "lucide-react";

export default function Contact() {
  const [loader, setLoader] = useState(false);
  const [popVisible, setPopVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoader(true);

    const formdata = new FormData(formRef.current);
    const data = {
      name: formdata.get("name"),
      email: formdata.get("email"),
      subject: formdata.get("subject"),
      message: formdata.get("message"),
    };

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        formRef.current.reset();
        setPopVisible(true);
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (e) {
      alert(`Something went wrong.${e}`);
    } finally {
      setLoader(false);
    }
  };

  const closePop = () => setPopVisible(false);

  return (
    <div className="min-h-screen bg-gradient-to-br py-16 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#091057] mb-4">
                Contact Us
              </h2>
              <p className="text-[#091057]/70 text-lg leading-relaxed">
                We are committed to processing the information in order to contact you and talk about your project.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#091057] rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#091057] font-medium">abdullahateeq331@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#091057] rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#091057] font-medium">0336-2310043</span>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-8">
              <a href="https://www.facebook.com/profile.php?id=61556808426897" target="_blank" rel="noopener noreferrer">
                <div className="p-3 bg-[#091057] rounded-lg hover:bg-[#0f1a6e] transition">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
              </a>
              <a href="https://x.com/H_abdulrab" target="_blank" rel="noopener noreferrer">
                <div className="p-3 bg-[#091057] rounded-lg hover:bg-[#0f1a6e] transition">
                  <Twitter className="w-5 h-5 text-white" />
                </div>
              </a>
              <a href="https://github.com/Huzaifaabdulrab" target="_blank" rel="noopener noreferrer">
                <div className="p-3 bg-[#091057] rounded-lg hover:bg-[#0f1a6e] transition">
                  <Github className="w-5 h-5 text-white" />
                </div>
              </a>
              <a href="https://www.instagram.com/huzaifaabdulrab2/?hl=en" target="_blank" rel="noopener noreferrer">
                <div className="p-3 bg-[#091057] rounded-lg hover:bg-[#0f1a6e] transition">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </a>
              <a href="https://linktr.ee/huzaifaabdulrab" target="_blank" rel="noopener noreferrer">
                <div className="p-3 bg-[#091057] rounded-lg hover:bg-[#0f1a6e] transition">
                  <Link className="w-5 h-5 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="w-full">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-5 py-4 bg-white border border-[#091057]/40 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#091057] transition"
                  placeholder="Name"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 bg-white border border-[#091057]/40 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#091057] transition"
                  placeholder="Email"
                />
              </div>

              {/* Subject */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-5 py-4 bg-white border border-[#091057]/40 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#091057] transition"
                  placeholder="Subject"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-5 py-4 bg-white border border-[#091057]/40 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#091057] transition resize-none"
                  placeholder="Message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loader}
                className={`w-full bg-[#e3e3e3] text-[#091057] font-semibold py-4 rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 ${
                  loader ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {loader ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
    {/* Success Popup */}
{popVisible && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
    <div className="relative bg-white/80 border border-white/40 rounded-3xl shadow-2xl px-10 py-8 text-center animate-[fadeIn_0.4s_ease-out]">
      {/* Success Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-[#091057] flex items-center justify-center animate-[pop_0.3s_ease-out]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.2}
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      {/* Text */}
      <h2 className="text-2xl font-semibold text-[#091057]">
        Message Sent Successfully!
      </h2>
      <p className="text-gray-600 mt-3 text-[15px] leading-relaxed">
        Thank you for reaching out. I’ll get back to you very soon.
      </p>

      {/* Button */}
      <div className="mt-6">
        <button
          onClick={closePop}
          className="px-8 py-3 rounded-full bg-[#091057] text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
        >
          Continue
        </button>
      </div>

      {/* Decorative glow */}
      <div className="absolute -z-10 inset-0 blur-2xl bg-[#091057]/10 rounded-3xl"></div>
    </div>
  </div>
)}

    </div>
  );
}
