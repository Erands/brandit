"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Rocket,
  Award,
  GraduationCap,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

export default function CoreValues() {
  const t = useTranslations("About");

  const values = [
    {
      icon: Lightbulb,
      title: t("value1Title"),
      description: t("value1Description"),
    },
    {
      icon: Award,
      title: t("value2Title"),
      description: t("value2Description"),
    },
    {
      icon: ShieldCheck,
      title: t("value3Title"),
      description: t("value3Description"),
    },
    {
      icon: Users,
      title: t("value4Title"),
      description: t("value4Description"),
    },
    {
      icon: Rocket,
      title: t("value5Title"),
      description: t("value5Description"),
    },
    {
      icon: GraduationCap,
      title: t("value6Title"),
      description: t("value6Description"),
    },
  ];

  return (
    <Section>
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
            {t("valuesBadge")}
          </span>

          <h2 className="mt-8 text-4xl font-black lg:text-5xl">
            {t("valuesTitle")}
          </h2>

          <p className="mt-6 text-lg leading-9 text-white/65">
            {t("valuesDescription")}
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full rounded-[30px] p-8">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500">

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-5 leading-8 text-white/60">
                    {value.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}