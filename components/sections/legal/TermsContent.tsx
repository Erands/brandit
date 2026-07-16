"use client";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

export default function TermsContent() {
  const t = useTranslations("Terms");

  const sections = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
  ];

  return (
    <Section>
      <Container>

        <div className="mx-auto max-w-5xl space-y-8">

          {sections.map((key) => (
            <GlassCard
              key={key}
              className="rounded-[30px] p-10"
            >
              <h2 className="text-3xl font-bold">
                {t(`${key}Title`)}
              </h2>

              <p className="mt-6 leading-9 text-white/65">
                {t(`${key}Content`)}
              </p>

            </GlassCard>
          ))}

        </div>

      </Container>
    </Section>
  );
}