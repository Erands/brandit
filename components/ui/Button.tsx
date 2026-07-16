"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <motion.button
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{
        scale: .98,
      }}
      className={clsx(
        "rounded-full px-8 py-4 font-semibold transition-all",

        variant === "primary"
          ? "bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white"
          : "border border-white/10 bg-white/5 text-white",

        className
      )}
    >
      {children}
    </motion.button>
  );
}