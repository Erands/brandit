"use client";

import { useTranslations } from "next-intl";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      name: "RÊVE Interior",
      role: "Luxury Furniture",
      comment: t("review1"),
    },
    {
      name: "PAUSA Restaurant",
      role: "Restaurant",
      comment: t("review2"),
    },
    {
      name: "Bella Beauty",
      role: "Beauty Brand",
      comment: t("review3"),
    },
    {
      name: "Kaydan Immobilier",
      role: "Real Estate",
      comment: t("review4"),
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

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              {...item}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}