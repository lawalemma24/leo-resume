"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0a0d16]/95 backdrop-blur-xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Links */}
          <nav className="flex flex-col items-center gap-10">
            {links.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.35 }}
              >
                <Link
                  href={link.path}
                  onClick={onClose}
                  className="text-4xl font-black uppercase tracking-widest text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300"
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Decorative bottom text */}
          <p className="absolute bottom-10 text-gray-600 text-xs tracking-widest uppercase">
            LEO Portfolio
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
