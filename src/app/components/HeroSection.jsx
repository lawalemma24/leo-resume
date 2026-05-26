// import React from 'react'
"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 py-12" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 lg:col-span-7 flex flex-col items-start"
        >
          {/* Social Proof */}
          <div className="flex items-center gap-4 mb-10 bg-slate-800/20 px-4 py-2 rounded-full border border-slate-800">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#151A28] overflow-hidden bg-slate-700"
                >
                  <Image
                    src={`https://i.pravatar.cc/100?u=${i + 10}`}
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-sm font-medium">
              <span className="text-white font-bold">150+</span> Total Satisfied
              Client
            </p>
          </div>

          <h1 className="text-white mb-6 text-4xl sm:text-6xl lg:text-[100px] leading-[1.1] font-black uppercase tracking-tight">
            IT&apos;S ME <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              LEO ODUNAYO
            </span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl mb-10 max-w-xl leading-relaxed">
            I&apos;ve earned the trust of over 250 clients and 40 brands, all of
            whom are very satisfied with my service!
          </p>

          {/* Stats Section Integrated */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full mt-auto pt-10">
            <div>
              <h3 className="text-white text-3xl font-bold mb-1">20+</h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider">
                Projects Done
              </p>
            </div>
            <div>
              <h3 className="text-white text-3xl font-bold mb-1">~10</h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider">
                Users Served
              </p>
            </div>
            <div>
              <h3 className="text-white text-3xl font-bold mb-1">3+</h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider">
                Years Experience
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Content / Image Area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[400px] lg:w-[450px] lg:h-[600px]">
            <Image
              src="/images/profile-pics.jpg"
              alt="Leo Odunayo"
              className="object-cover rounded-3xl"
              fill
              priority
            />

            {/* CTA Button floating on image area */}
            <div className="absolute -bottom-6 left-0 sm:-left-6 lg:-left-20">
              <Link
                href="/#contact"
                className="flex items-center gap-3 bg-purple-600 text-white px-8 py-5 rounded-3xl "
              >
                <div className="bg-white/20 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="font-bold text-lg tracking-tight">
                  Schedule a Call
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
