"use client";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import IndustryCard from "./IndustryCard";

export default function Industries() {
  const t = useTranslations("Industries");

  const industries = [
    {
      title: t("restaurants"),
      description: t("restaurants_desc"),
      icon: "restaurant",
    },
    {
      title: t("hotels"),
      description: t("hotels_desc"),
      icon: "hotel",
    },
    {
      title: t("furniture"),
      description: t("furniture_desc"),
      icon: "furniture",
    },
    {
      title: t("realestate"),
      description: t("realestate_desc"),
      icon: "realestate",
    },
    {
      title: t("healthcare"),
      description: t("healthcare_desc"),
      icon: "healthcare",
    },
    {
      title: t("fashion"),
      description: t("fashion_desc"),
      icon: "fashion",
    },
    {
      title: t("education"),
      description: t("education_desc"),
      icon: "education",
    },
    {
      title: t("travel"),
      description: t("travel_desc"),
      icon: "travel",
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

          {industries.map((industry) => (
            <IndustryCard
              key={industry.title}
              {...industry}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}