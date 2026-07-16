"use client";

import { motion } from "framer-motion";
import {
  Globe,
  BrainCircuit,
  Smartphone,
  Megaphone,
  Cloud,
  Code2,
} from "lucide-react";
import GradientIcon from "@/components/ui/GradientIcon";

interface Props {
  title: string;
  className?: string;
}

export default function FloatingCard({
  title,
  className = "",
}: Props) {
  const icons = {
    AI: BrainCircuit,
    SaaS: Code2,
    Marketing: Megaphone,
    Cloud: Cloud,
    Website: Globe,
    Mobile: Smartphone,
  };

  const Icon =
    icons[title as keyof typeof icons] ?? Globe;

  return (
    <motion.div
      animate={{
        y: [0, -18, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className={`absolute ${className}`}
    >
      <div className="w-60 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl">

        <GradientIcon icon={Icon} />

        <h3 className="mt-5 text-lg font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/60">
          Enterprise Digital Solution
        </p>

      </div>
    </motion.div>
  );
}