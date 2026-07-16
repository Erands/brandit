"use client";

import { motion } from "framer-motion";

export default function CTAButton() {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="hidden lg:flex items-center justify-center rounded-full px-7 py-3 font-semibold text-white gradient-bg shadow-xl transition-all"
    >
      Commencer
    </motion.button>
  );
}