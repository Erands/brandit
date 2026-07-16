"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

export default function OurStory() {
  const t = useTranslations("About");

  return (
    <Section>
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
              {t("storyBadge")}
            </span>

            <h2 className="mt-8 text-4xl font-black lg:text-5xl">
              {t("storyTitle")}
            </h2>

            <p className="mt-8 text-lg leading-9 text-white/65">
              {t("storyParagraph1")}
            </p>

            <p className="mt-6 text-lg leading-9 text-white/65">
              {t("storyParagraph2")}
            </p>

            <p className="mt-6 text-lg leading-9 text-white/65">
              {t("storyParagraph3")}
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <GlassCard className="rounded-[36px] p-10">

              <div className="space-y-8">

                <div>
                  <h3 className="text-2xl font-bold gradient-text">
                    {t("purposeTitle")}
                  </h3>

                  <p className="mt-3 leading-8 text-white/60">
                    {t("purposeDescription")}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-8">

                  <h3 className="text-2xl font-bold gradient-text">
                    {t("visionTitle")}
                  </h3>

                  <p className="mt-3 leading-8 text-white/60">
                    {t("visionDescription")}
                  </p>

                </div>

              </div>

            </GlassCard>

          </motion.div>

        </div>
      </Container>
    </Section>
  );
}