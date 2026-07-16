"use client";

import { motion } from "framer-motion";

export default function HeroGlow() {
  return (
    <>
      <motion.div
        animate={{
          opacity: [.4, .9, .4],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[180px]"
      />

      <motion.div
        animate={{
          opacity: [.2, .6, .2],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[160px]"
      />
    </>
  );
}