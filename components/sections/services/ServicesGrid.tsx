"use client";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  const t = useTranslations("Services");

  return (
    <Section>
      <Container>

        <SectionHeading
          badge={t("servicesBadge")}
          title={t("servicesTitle")}
          description={t("servicesDescription")}
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service: any) => (

            <ServiceCard
              key={service.slug}
              slug={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.shortDescription}
            />

          ))}

        </div>

      </Container>
    </Section>
  );
}