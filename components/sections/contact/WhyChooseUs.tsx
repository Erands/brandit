"use client";

import { useTranslations } from "next-intl";
import {
  ShieldCheck,
  Clock3,
  Globe2,
  Users,
  BriefcaseBusiness,
  Headphones,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

export default function WhyChooseUs() {
  const t = useTranslations("Contact");

  const items = [
    {
      icon: Clock3,
      title: t("why1Title"),
      description: t("why1Description"),
    },
    {
      icon: ShieldCheck,
      title: t("why2Title"),
      description: t("why2Description"),
    },
    {
      icon: Globe2,
      title: t("why3Title"),
      description: t("why3Description"),
    },
    {
      icon: Users,
      title: t("why4Title"),
      description: t("why4Description"),
    },
    {
      icon: BriefcaseBusiness,
      title: t("why5Title"),
      description: t("why5Description"),
    },
    {
      icon: Headphones,
      title: t("why6Title"),
      description: t("why6Description"),
    },
  ];

  return (
    <Section>
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
            {t("whyBadge")}
          </span>

          <h2 className="mt-8 text-4xl font-black lg:text-5xl">
            {t("whyTitle")}
          </h2>

          <p className="mt-6 text-lg leading-9 text-white/65">
            {t("whyDescription")}
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <GlassCard
                key={index}
                className="rounded-[30px] p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500">

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

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

      </Container>
    </Section>
  );
}