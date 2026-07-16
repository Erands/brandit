"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center">

        <span className="mb-4 text-xs uppercase tracking-[6px] text-white/40">
          Scroll
        </span>

        <ChevronDown
          className="text-white/60"
          size={24}
        />

      </div>
    </motion.div>
  );
}