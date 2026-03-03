"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface DockItem {
  title: string;
  icon: string;
  href: string;
}

export const FloatingDock = ({ items }: { items: DockItem[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
    >
      <div className="flex items-end gap-2 px-4 py-3 bg-neutral-900/80 backdrop-blur-md border border-neutral-700 rounded-full">
        {items.map((item, idx) => (
          <motion.a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              y: hoveredIndex === idx ? -10 : 0,
              scale: hoveredIndex === idx ? 1.2 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center justify-center w-12 h-12 text-2xl bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors"
          >
            {item.icon}
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-10 px-2 py-1 bg-neutral-800 text-neutral-200 text-xs rounded whitespace-nowrap"
              >
                {item.title}
              </motion.div>
            )}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};
