"use client";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

export default function PrivacyContent() {
  const t = useTranslations("Privacy");

  const sections = [
    {
      title: t("section1Title"),
      content: t("section1Content"),
    },
    {
      title: t("section2Title"),
      content: t("section2Content"),
    },
    {
      title: t("section3Title"),
      content: t("section3Content"),
    },
    {
      title: t("section4Title"),
      content: t("section4Content"),
    },
    {
      title: t("section5Title"),
      content: t("section5Content"),
    },
    {
      title: t("section6Title"),
      content: t("section6Content"),
    },
    {
      title: t("section7Title"),
      content: t("section7Content"),
    },
  ];

  return (
    <Section>
      <Container>

        <div className="mx-auto max-w-5xl space-y-8">

          {sections.map((section, index) => (
            <GlassCard
              key={index}
              className="rounded-[30px] p-10"
            >
              <h2 className="text-3xl font-bold">
                {section.title}
              </h2>

              <p className="mt-6 leading-9 text-white/65">
                {section.content}
              </p>

            </GlassCard>
          ))}

        </div>

      </Container>
    </Section>
  );
}