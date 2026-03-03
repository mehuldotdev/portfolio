"use client";

import React from "react";
import { motion } from "framer-motion";

export const HoverBorderGradient = ({
  children,
  className = "",
  containerClassName = "",
  duration = 1,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  duration?: number;
}) => {
  return (
    <div className={`relative ${containerClassName}`}>
      <motion.div
        className="absolute -inset-[1px] rounded-lg opacity-75 blur-sm"
        style={{
          background:
            "linear-gradient(90deg, #a3a3a3, #737373, #525252, #737373, #a3a3a3)",
          backgroundSize: "400% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: duration * 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className={`relative bg-black rounded-lg ${className}`}>
        {children}
      </div>
    </div>
  );
};
