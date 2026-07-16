"use client";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import TechCard from "./TechCard";

export default function TechStack() {
  const t = useTranslations("Tech");

  const technologies = [
    { title: "Next.js" },
    { title: "React" },
    { title: "Node.js" },
    { title: "Flutter" },
    { title: "Laravel" },
    { title: "OpenAI" },
    { title: "Docker" },
    { title: "AWS" },
    { title: "PostgreSQL" },
    { title: "Supabase" },
    { title: "Firebase" },
    { title: "Google Cloud" },
    { title: "Meta Ads" },
    { title: "Google Ads" },
    { title: "Stripe" },
    { title: "Cloudflare" },
  ];

  return (
    <Section>

      <Container>

        <SectionHeading
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-20 grid gap-6 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8">

          {technologies.map((tech) => (
            <TechCard
              key={tech.title}
              title={tech.title}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}