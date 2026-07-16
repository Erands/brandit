"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

interface Props {
  title: string;
}

export default function TechCard({
  title,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <GlassCard className="flex h-28 items-center justify-center transition-all duration-500 hover:border-orange-500/30">

        <h3 className="text-center text-lg font-semibold text-white">
          {title}
        </h3>

      </GlassCard>
    </motion.div>
  );
}