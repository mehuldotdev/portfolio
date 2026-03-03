"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

export const MovingBorder = ({
  children,
  duration = 2000,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-neutral-500 via-neutral-300 to-neutral-500 rounded-sm opacity-100 blur">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(0deg, rgba(115,115,115,0.5) 0%, rgba(64,64,64,0.5) 100%)",
              "linear-gradient(90deg, rgba(115,115,115,0.5) 0%, rgba(64,64,64,0.5) 100%)",
              "linear-gradient(180deg, rgba(115,115,115,0.5) 0%, rgba(64,64,64,0.5) 100%)",
              "linear-gradient(270deg, rgba(115,115,115,0.5) 0%, rgba(64,64,64,0.5) 100%)",
              "linear-gradient(360deg, rgba(115,115,115,0.5) 0%, rgba(64,64,64,0.5) 100%)",
            ],
          }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div className="relative bg-yin-dark rounded-sm">{children}</div>
    </div>
  );
};
