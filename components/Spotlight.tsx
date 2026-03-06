"use client";

import { motion } from "framer-motion";

export const Spotlight = () => {
  return (
    <motion.div
      className="absolute -top-40 left-0 md:left-60 md:-top-20 pointer-events-none z-[1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-[40vw] h-[50vh] relative">
        <div className="absolute inset-0 bg-white/[0.25] blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-white/[0.15] blur-2xl rounded-full" />
      </div>
    </motion.div>
  );
};
