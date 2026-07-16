"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  number: string;
}

export default function FeatureCard({
  title,
  description,
  number,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="glass rounded-[32px] p-10 group relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-blue-500/10"/>

      <div className="relative">

        <span className="gradient-text text-6xl font-black">
          {number}
        </span>

        <h3 className="mt-8 text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-5 text-white/60 leading-8">
          {description}
        </p>

      </div>

    </motion.div>
  );
}