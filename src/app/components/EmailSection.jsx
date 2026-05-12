"use client";
import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";

const EmailSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  return (
    <section id="contact" style={{ marginTop: '160px' }} className="relative w-full py-48 bg-[#151A28] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20 mt-12">
          <div className="h-[1px] w-16 bg-[#ff7a5c]" />
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-white/70">
            Contacts
          </span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 mb-28">
          {/* Left */}
          <div className="lg:w-1/2 flex flex-col items-start justify-between gap-12">
            <div className="space-y-2">
              <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
                Have a project?
              </h2>

              <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-white/90">
                Let&apos;s talk!
              </h2>
            </div>

            <button
              onClick={() =>
                document.getElementById("actual-form-submit")?.click()
              }
              className="px-12 py-5 bg-[#ff7a5c] hover:bg-[#e66b4d] text-white text-lg font-semibold tracking-wide transition-all duration-300 hover:translate-y-[-2px]"
            >
              Submit
            </button>
          </div>

          {/* Right */}
          <div className="lg:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
              {/* Name */}
              <div className="flex flex-col gap-4">
                <label className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="bg-transparent outline-none border-0 border-b border-white/10 focus:border-[#ff7a5c] py-4 text-lg text-white placeholder:text-white/20 transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <label className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Email
                </label>

                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="bg-transparent outline-none border-0 border-b border-white/10 focus:border-[#ff7a5c] py-4 text-lg text-white placeholder:text-white/20 transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-4">
                <label className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Message
                </label>

                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  className="bg-transparent outline-none border-0 border-b border-white/10 focus:border-[#ff7a5c] py-4 text-lg text-white resize-none placeholder:text-white/20 transition-colors duration-300"
                />
              </div>

              <button
                id="actual-form-submit"
                type="submit"
                className="hidden"
              />
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-20 border-t border-white/5 flex flex-col items-center gap-12 text-center">
          <div className="space-y-3">
            <h3 className="text-3xl font-black tracking-[0.3em]">
              LEO ODUNAYO
            </h3>

            <p className="text-sm text-white/40 max-w-md leading-relaxed">
              Designed with love, all rights reserved for Leo Odunayo.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6 pb-10 flex-wrap justify-center">
            <Link
              href="mailto:lawalemma24@gmail.com"
              className="w-14 h-14 bg-white text-black flex items-center justify-center hover:bg-[#ff7a5c] hover:text-white transition-all duration-300"
            >
              <Mail size={22} />
            </Link>

            <Link
              href="https://github.com/lawalemma24"
              target="_blank"
              className="w-14 h-14 bg-white text-black flex items-center justify-center hover:bg-[#ff7a5c] hover:text-white transition-all duration-300"
            >
              <FaGithub size={22} />
            </Link>

            <Link
              href="https://linkedin.com/in/emmanuel-lawal-37471b283"
              target="_blank"
              className="w-14 h-14 bg-white text-black flex items-center justify-center hover:bg-[#ff7a5c] hover:text-white transition-all duration-300"
            >
              <FaLinkedin size={22} />
            </Link>

            <Link
              href="https://wa.me/+2348146506157"
              target="_blank"
              className="w-14 h-14 bg-white text-black flex items-center justify-center hover:bg-[#ff7a5c] hover:text-white transition-all duration-300"
            >
              <FaWhatsapp size={22} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
