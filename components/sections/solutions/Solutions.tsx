"use client";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import SolutionCard from "./SolutionCard";

export default function Solutions() {
  const t = useTranslations("Solutions");

  const solutions = [
    {
      title: t("website_title"),
      description: t("website_desc"),
      icon: "website",
    },
    {
      title: t("mobile_title"),
      description: t("mobile_desc"),
      icon: "mobile",
    },
    {
      title: t("software_title"),
      description: t("software_desc"),
      icon: "software",
    },
    {
      title: t("ai_title"),
      description: t("ai_desc"),
      icon: "ai",
    },
    {
      title: t("branding_title"),
      description: t("branding_desc"),
      icon: "branding",
    },
    {
      title: t("marketing_title"),
      description: t("marketing_desc"),
      icon: "marketing",
    },
    {
      title: t("cloud_title"),
      description: t("cloud_desc"),
      icon: "cloud",
    },
    {
      title: t("consulting_title"),
      description: t("consulting_desc"),
      icon: "consulting",
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

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {solutions.map((solution) => (
            <SolutionCard
              key={solution.title}
              {...solution}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}