"use client";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

export default function FeaturedPost() {
  const t = useTranslations("Blog");

  return (
    <Section>
      <Container>

        <GlassCard className="overflow-hidden rounded-[36px] p-10">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                {t("featured")}
              </span>

              <h2 className="mt-8 text-4xl font-black">
                {t("comingSoon")}
              </h2>

              <p className="mt-6 text-white/60 leading-9">
                {t("empty")}
              </p>

            </div>

            <div className="flex h-[320px] items-center justify-center rounded-[30px] bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-blue-500/20">

              <span className="text-7xl">📰</span>

            </div>

          </div>

        </GlassCard>

      </Container>
    </Section>
  );
}