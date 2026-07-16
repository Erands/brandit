"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "12+",
    label: "Countries",
  },
  {
    value: "500+",
    label: "Projects",
  },
  {
    value: "15+",
    label: "Industries",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-20">
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
          >
            <h3 className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-5xl font-black text-transparent">
              {item.value}
            </h3>

            <p className="mt-3 text-white/60">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}