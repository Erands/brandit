"use client";

import {
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";

import { useTranslations } from "next-intl";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientIcon from "@/components/ui/GradientIcon";

const icons = [
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
];

export default function Process() {

  const t = useTranslations("Process");

  const steps = [
    t("step1"),
    t("step2"),
    t("step3"),
    t("step4"),
    t("step5"),
  ];

  return (
    <Section>

      <Container>

        <SectionHeading
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-24 grid gap-10 lg:grid-cols-5">

          {steps.map((step, index) => {

            const Icon = icons[index];

            return (
              <div
                key={index}
                className="text-center"
              >

                <div className="flex justify-center">

                  <GradientIcon icon={Icon} />

                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {step}
                </h3>

              </div>
            );

          })}

        </div>

      </Container>

    </Section>
  );
}