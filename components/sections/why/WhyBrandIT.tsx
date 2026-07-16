"use client";

import { useTranslations } from "next-intl";
import {
  Rocket,
  BrainCircuit,
  Globe2,
  ShieldCheck,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GradientIcon from "@/components/ui/GradientIcon";

const icons = [
  Rocket,
  BrainCircuit,
  Globe2,
  ShieldCheck,
];

export default function WhyBrandIT() {
  const t = useTranslations("Why");

  const features = [
    {
      title: t("feature1_title"),
      description: t("feature1_desc"),
    },
    {
      title: t("feature2_title"),
      description: t("feature2_desc"),
    },
    {
      title: t("feature3_title"),
      description: t("feature3_desc"),
    },
    {
      title: t("feature4_title"),
      description: t("feature4_desc"),
    },
  ];

  return (
    <Section>

      <Container>

        <SectionHeading
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {features.map((item, index) => {

            const Icon = icons[index];

            return (
              <GlassCard
                key={index}
                className="group p-8 transition duration-500 hover:border-orange-500/30"
              >
                <GradientIcon icon={Icon} />

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-white/60">
                  {item.description}
                </p>
              </GlassCard>
            );

          })}

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-4">

          <GlassCard className="p-8 text-center">
            <h2 className="gradient-text text-5xl font-black">
              150+
            </h2>

            <p className="mt-3 text-white/60">
              Projects Delivered
            </p>
          </GlassCard>

          <GlassCard className="p-8 text-center">
            <h2 className="gradient-text text-5xl font-black">
              12
            </h2>

            <p className="mt-3 text-white/60">
              African Countries
            </p>
          </GlassCard>

          <GlassCard className="p-8 text-center">
            <h2 className="gradient-text text-5xl font-black">
              25+
            </h2>

            <p className="mt-3 text-white/60">
              Digital Services
            </p>
          </GlassCard>

          <GlassCard className="p-8 text-center">
            <h2 className="gradient-text text-5xl font-black">
              98%
            </h2>

            <p className="mt-3 text-white/60">
              Client Satisfaction
            </p>
          </GlassCard>

        </div>

      </Container>

    </Section>
  );
}