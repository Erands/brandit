"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

import GlassCard from "@/components/ui/GlassCard";

interface Props {
  name: string;
  role: string;
  comment: string;
}

export default function TestimonialCard({
  name,
  role,
  comment,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
    >
      <GlassCard className="h-full p-10">

        <Quote
          size={42}
          className="text-orange-400"
        />

        <p className="mt-8 text-lg leading-9 text-white/70">
          {comment}
        </p>

        <div className="mt-10 flex items-center justify-between">

          <div>

            <h3 className="text-xl font-bold">
              {name}
            </h3>

            <p className="text-white/50">
              {role}
            </p>

          </div>

          <div className="flex gap-1">

            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-orange-400 text-orange-400"
              />
            ))}

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}