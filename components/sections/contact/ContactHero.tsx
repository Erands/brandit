"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import Container from "@/components/ui/Container";

export default function ContactHero() {
  const t = useTranslations("Contact");

  return (
    <section className="relative overflow-hidden pt-44 pb-28">

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <Container>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400"
          >
            {t("badge")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-5xl font-black leading-tight md:text-6xl xl:text-7xl"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/65"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-5"
          >
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 px-8 py-5 font-semibold transition hover:scale-105"
            >
              {t("button1")}
            </Link>

            <Link
              href="https://wa.me/22505458628"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-5 font-semibold transition hover:border-orange-500"
            >
              <MessageCircle size={20} />

              {t("button2")}

              <ArrowRight size={18} />
            </Link>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}