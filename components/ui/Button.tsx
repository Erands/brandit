"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "rounded-full px-7 py-4 font-semibold transition-all duration-300",
        "cursor-pointer",
        "text-white",
        "shadow-lg",
        variant === "primary"
          ? "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:shadow-orange-500/30"
          : "border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}