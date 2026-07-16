"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "150+",
    label: "Projects",
  },
  {
    number: "12",
    label: "Countries",
  },
  {
    number: "98%",
    label: "Satisfaction",
  },
  {
    number: "24/7",
    label: "Support",
  },
];

export default function Stats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.2,
          }}
          className="glass rounded-3xl p-6 text-center"
        >
          <h3 className="gradient-text text-4xl font-black">
            {item.number}
          </h3>

          <p className="mt-2 text-white/60">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}