"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const t = useTranslations("Services");

  return (
    <section className="relative overflow-hidden pt-44 pb-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[#040816]" />

      <div className="absolute left-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="absolute right-[-200px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <Container>

        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="gradient-text text-sm font-semibold uppercase tracking-[7px]">

              {t("badge")}

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

              {t("title")}

            </h1>

            <p className="mt-8 text-xl leading-9 text-white/65">

              {t("description")}

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Button>

                <span className="flex items-center gap-3">

                  {t("cta")}

                  <ArrowRight size={18} />

                </span>

              </Button>

              <Button variant="secondary">

                {t("portfolio")}

              </Button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-3xl"
          >

            <div className="space-y-6">

              {[
                t("item1"),
                t("item2"),
                t("item3"),
                t("item4"),
                t("item5"),
                t("item6"),
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5"
                >

                  <CheckCircle2
                    size={22}
                    className="text-orange-400"
                  />

                  <span className="text-lg text-white/80">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}