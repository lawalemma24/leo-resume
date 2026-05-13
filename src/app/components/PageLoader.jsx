"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0d16]"
                >
                    {/* Glow orbs */}
                    <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute w-48 h-48 bg-blue-600/20 rounded-full blur-2xl top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="z-10 flex flex-col items-center gap-6"
                    >
                        <h1 className="text-5xl font-black italic tracking-tighter text-white">
                            LEO{" "}
                            <span className="font-normal not-italic text-gray-400 text-3xl">ツ</span>
                        </h1>

                        {/* Animated bar */}
                        <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>

                        <p className="text-gray-500 text-xs tracking-widest uppercase">
                            Portfolio
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
