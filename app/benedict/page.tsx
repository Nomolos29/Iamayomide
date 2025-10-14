 
"use client";
import React from "react";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.2),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,0,255,0.2),transparent_60%)] blur-3xl"></div>

 
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
      >
        Benedict 🙂
      </motion.h2>

       
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
    </main>
  );
};

export default PortfolioPage;
