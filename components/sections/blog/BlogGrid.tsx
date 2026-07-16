"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

export default function BlogGrid() {
  const t = useTranslations("Blog");

  const posts = Array.from({ length: 6 });

  return (
    <Section>

      <Container>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {posts.map((_, index) => (

            <GlassCard
              key={index}
              className="overflow-hidden rounded-[30px]"
            >

              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-blue-500/20">

                <span className="text-6xl">📰</span>

              </div>

              <div className="p-8">

                <div className="flex items-center gap-6 text-sm text-white/50">

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    Soon
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    5 min
                  </div>

                </div>

                <h3 className="mt-6 text-2xl font-bold">

                  {t("comingSoon")}

                </h3>

                <p className="mt-5 leading-8 text-white/60">

                  {t("empty")}

                </p>

                <button className="mt-8 flex items-center gap-3 font-semibold text-orange-400">

                  {t("readMore")}

                  <ArrowRight size={18} />

                </button>

              </div>

            </GlassCard>

          ))}

        </div>

      </Container>

    </Section>
  );
}