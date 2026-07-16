"use client";

import { motion } from "framer-motion";

const companies = [
  "Restaurants",
  "Hotels",
  "Real Estate",
  "Furniture",
  "Healthcare",
  "Fashion",
  "Education",
  "Travel",
];

export default function TrustedCompanies() {
  return (
    <section className="mt-28 overflow-hidden">

      <p className="mb-10 text-center text-sm uppercase tracking-[6px] text-white/40">
        Trusted Across Industries
      </p>

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="flex w-max gap-12"
      >
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="glass rounded-full px-8 py-4 text-lg whitespace-nowrap"
          >
            {company}
          </div>
        ))}
      </motion.div>

    </section>
  );
}