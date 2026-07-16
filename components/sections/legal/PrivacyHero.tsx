"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";

export default function PrivacyHero() {
  const t = useTranslations("Privacy");

  return (
    <section className="relative overflow-hidden pt-44 pb-24">

      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <Container>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400"
          >
            {t("badge")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-5xl font-black lg:text-7xl"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/65"
          >
            {t("description")}
          </motion.p>

        </div>

      </Container>

    </section>
  );
}