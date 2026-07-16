"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Stats from "./Stats";

export default function HeroContent() {
  const t = useTranslations("Hero");

  return (
    <div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass inline-flex rounded-full px-5 py-2 text-sm"
      >
        🚀 {t("badge")}
      </motion.span>

      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="mt-8 text-5xl font-black leading-tight lg:text-7xl"
      >
        {t("title")}

        <br />

        <span className="gradient-text">
          {t("highlight")}
        </span>
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.4,
        }}
        className="mt-8 max-w-xl text-xl leading-9 text-white/70"
      >
        {t("description")}
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
        }}
        className="mt-12 flex flex-wrap gap-5"
      >
        <button className="gradient-bg flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition hover:scale-105">

          {t("cta")}

          <ArrowRight size={18} />

        </button>

        <button className="glass rounded-full px-8 py-4 font-semibold transition hover:bg-white/10">

          {t("portfolio")}

        </button>
      </motion.div>

      <Stats />

    </div>
  );
}