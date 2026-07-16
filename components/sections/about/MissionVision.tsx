"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

export default function MissionVision() {
  const t = useTranslations("About");

  return (
    <Section>
      <Container>

        <div className="mb-16 text-center">

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
            {t("missionBadge")}
          </span>

          <h2 className="mt-8 text-4xl font-black lg:text-5xl">
            {t("missionHeading")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/65">
            {t("missionIntro")}
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full rounded-[36px] p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500">

                <Target className="text-white" size={32} />

              </div>

              <h3 className="mt-8 text-3xl font-bold">
                {t("missionTitle")}
              </h3>

              <p className="mt-6 leading-9 text-white/65">
                {t("missionDescription")}
              </p>

            </GlassCard>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full rounded-[36px] p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500">

                <Eye className="text-white" size={32} />

              </div>

              <h3 className="mt-8 text-3xl font-bold">
                {t("visionCardTitle")}
              </h3>

              <p className="mt-6 leading-9 text-white/65">
                {t("visionCardDescription")}
              </p>

            </GlassCard>

          </motion.div>

        </div>

      </Container>
    </Section>
  );
}