"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[#040816]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute left-[-200px] top-[-200px] h-[700px] w-[700px] rounded-full bg-orange-500/20 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute right-[-200px] top-0 h-[700px] w-[700px] rounded-full bg-pink-500/20 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-[-300px] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[200px]"
      />
<div className="absolute inset-0 opacity-[0.03]">

  <div
    className="h-full w-full"
    style={{
      backgroundImage:
        "radial-gradient(circle at center, rgba(255,255,255,.08) 1px, transparent 1px)",
      backgroundSize: "42px 42px",
    }}
  />

</div>

    </>
  );
}