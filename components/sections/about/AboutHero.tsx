"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

export default function AboutHero() {
  const t = useTranslations("About");

  return (
    <section className="relative overflow-hidden pt-44 pb-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <Container>

        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">

              <Sparkles size={16} />

              {t("badge")}

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl xl:text-7xl">

              {t("title")}

            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/65">

              {t("description")}

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 px-8 py-5 font-semibold transition hover:scale-105"
              >
                {t("button1")}
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-5 font-semibold transition hover:border-orange-500"
              >
                {t("button2")}

                <ArrowRight size={18} />
              </Link>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >

            <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-3xl">

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-2xl bg-white/5 p-8">
                  <h2 className="text-4xl font-black gradient-text">12+</h2>
                  <p className="mt-3 text-white/60">
                    {t("stat1")}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-8">
                  <h2 className="text-4xl font-black gradient-text">7</h2>
                  <p className="mt-3 text-white/60">
                    {t("stat2")}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-8">
                  <h2 className="text-4xl font-black gradient-text">24/7</h2>
                  <p className="mt-3 text-white/60">
                    {t("stat3")}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-8">
                  <h2 className="text-4xl font-black gradient-text">100%</h2>
                  <p className="mt-3 text-white/60">
                    {t("stat4")}
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}