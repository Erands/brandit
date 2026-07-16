"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function Reveal({
  children,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity:0,
        y:50,
      }}
      whileInView={{
        opacity:1,
        y:0,
      }}
      viewport={{
        once:true,
      }}
      transition={{
        duration:.6,
      }}
    >
      {children}
    </motion.div>
  );
}